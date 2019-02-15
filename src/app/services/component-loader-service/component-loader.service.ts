import { Injectable, ComponentFactory, Compiler } from '@angular/core';
import { AppConfiguration } from '../../apps.configuration';

// import { environment } from '../../../environments/environment';

declare const SystemJS;

export interface GlobalComponentStorage {
  [key: string]: ComponentFactory<any>;
}

interface ExtendedWindow extends Window {
  AppGlobalComponent: GlobalComponentStorage;
}

function _window(): ExtendedWindow {
   return window as ExtendedWindow;
}

@Injectable()
export class ComponentLoaderService {
  constructor(private _compiler: Compiler) {
    _window().AppGlobalComponent = _window().AppGlobalComponent || { };
  }

  public updateModule(configuration: AppConfiguration) {
    // const importUrl = !!environment.devModulePrefixPath && name === environment.devModuleName
    // ? `${environment.devModulePrefixPath}/global.bundle.umd.min.js` : `${configuration.url}/global.bundle.umd.min.js`;
    const importUrl = `${configuration.devUrl || configuration.url}/global.bundle.umd.min.js`;

    SystemJS.import(importUrl)
      .then(globalModule => {
        const factories = this._compiler.compileModuleAndAllComponentsSync(globalModule.GlobalModule);
        factories.componentFactories.forEach(item => {
          this.addOrReplaceComponent(item.selector, item);
        });
      })
      .catch(err => {
        console.error(`Failed to load global bundle: ${importUrl}. ${err}`);
      });
  }

  public addOrReplaceComponent(name: string, factory: ComponentFactory<any>) {
    _window().AppGlobalComponent[name] = factory;
  }
}
