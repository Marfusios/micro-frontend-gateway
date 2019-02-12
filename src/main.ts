import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as common from '@angular/common';
import * as commonHttp from '@angular/common/http';
import * as core from '@angular/core';
import * as router from '@angular/router';
import * as forms from '@angular/forms';
import * as animations from '@angular/animations';
import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';
import * as tslib from 'tslib';
import * as aElements from '@angular/elements';
import * as store from '@ngrx/store';
import * as aPlatformBrowser from '@angular/platform-browser';
import * as aPlatformBrowserAnimations from '@angular/platform-browser/animations';


/**
 * Setup SystemJS modules for remote module dependencies
 */
declare const SystemJS;

SystemJS.set('@angular/core', SystemJS.newModule(core));
SystemJS.set('@angular/common', SystemJS.newModule(common));
SystemJS.set('@angular/common/http', SystemJS.newModule(commonHttp));
SystemJS.set('@angular/router', SystemJS.newModule(router));
SystemJS.set('@angular/forms', SystemJS.newModule(forms));
SystemJS.set('@angular/animations', SystemJS.newModule(animations));
SystemJS.set('@angular/elements', SystemJS.newModule(aElements));
SystemJS.set('@angular/platform-browser', SystemJS.newModule(aPlatformBrowser));
SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(aPlatformBrowserAnimations));
SystemJS.set('rxjs', SystemJS.newModule(rxjs));
SystemJS.set('rxjs/operators', SystemJS.newModule(rxjsOperators));
SystemJS.set('tslib', SystemJS.newModule(tslib));
SystemJS.set('@ngrx/store', SystemJS.newModule(store));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
