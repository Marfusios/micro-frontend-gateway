import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as common from '@angular/common';
import * as commonHttp from '@angular/common/http';
import * as core from '@angular/core';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';


/**
 * Setup SystemJS modules for remote module dependencies
 */
declare const SystemJS;
SystemJS.set('@angular/core', SystemJS.newModule(core));
SystemJS.set('@angular/common', SystemJS.newModule(common));
SystemJS.set('@angular/common/http', SystemJS.newModule(commonHttp));
SystemJS.set('@angular/router', SystemJS.newModule(router));
SystemJS.set('rxjs', SystemJS.newModule(rxjs));
SystemJS.set('rxjs/operators', SystemJS.newModule(rxjsOperators));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
