import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { ErrorComponent } from './components/error/error.component';
import { getApps, AppConfiguration } from './apps.configuration';

declare const SystemJS;

/**
 * Lazy load remote bundle (AOT compatible!)
 */
export const loadRemoteChildren = (configuration: AppConfiguration) => {
  // const importUrl = !!environment.devModulePrefixPath && name === environment.devModuleName
  //   ? `${environment.devModulePrefixPath}/bundle.umd.min.js` : `${url}/bundle.umd.min.js`;
  // const importUrl = '../../../entry/entry.module#EntryModule';
  const importUrl = `${configuration.devUrl || configuration.url}/bundle.umd.min.js`;

  return SystemJS.import(importUrl)
    .then(entryModule => entryModule.EntryModule)
    .catch(err => {
      handleLoadError(importUrl, err);
    });
};


const handleLoadError = function (url, err) {
  const msg = `Failed to load service from '${url}'.`;
  console.error(msg, err);
  // const msgEncoded = encodeURIComponent(msg);
  // window.location.href = `/error/${msgEncoded}`;
};

const routes: Routes = [
  {
    path: 'services',
    children: getApps().map(item => {
      return {
        path: item.path,
        loadChildren: () => loadRemoteChildren(item)
      };
    })
  },
  {
    path: 'error/:msg',
    component: ErrorComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
