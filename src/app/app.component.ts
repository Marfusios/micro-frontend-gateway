import { Component } from '@angular/core';
import { getApps } from './apps.configuration';
import { ComponentLoaderService } from './services/component-loader-service/component-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _componentLoaderService: ComponentLoaderService) {
    this.loadGlobalBundles();
  }

  loadGlobalBundles() {
    getApps().forEach(app => this._componentLoaderService.updateModule(app));
  }
}
