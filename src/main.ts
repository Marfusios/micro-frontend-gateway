import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as jquery from 'jquery';
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
import * as agGridAngular from 'ag-grid-angular';

// import * as ace from 'ace-builds/src-noconflict/ace';
// import * as aceChrome from 'ace-builds/src-noconflict/theme-chrome';
// import * as aceHtml from 'ace-builds/src-noconflict/mode-html.js';
// import * as aceSql from 'ace-builds/src-noconflict/mode-sql.js';

// import * as froalaEditor from 'froala-editor/js/froala_editor.min.js';

/**
 * Setup SystemJS modules for remote module dependencies
 */
declare const SystemJS;

SystemJS.set('jquery', SystemJS.newModule(jquery));
SystemJS.set('@angular/core', SystemJS.newModule(core));
SystemJS.set('@angular/common', SystemJS.newModule(common));
SystemJS.set('@angular/common/http', SystemJS.newModule(commonHttp));
SystemJS.set('@angular/router', SystemJS.newModule(router));
SystemJS.set('@angular/forms', SystemJS.newModule(forms));
SystemJS.set('@angular/animations', SystemJS.newModule(animations));
SystemJS.set('@angular/elements', SystemJS.newModule(aElements));
SystemJS.set('@angular/platform-browser', SystemJS.newModule(aPlatformBrowser));
SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(aPlatformBrowserAnimations));
SystemJS.set('ag-grid-angular', SystemJS.newModule(agGridAngular));
SystemJS.set('rxjs', SystemJS.newModule(rxjs));
SystemJS.set('rxjs/operators', SystemJS.newModule(rxjsOperators));
SystemJS.set('tslib', SystemJS.newModule(tslib));
SystemJS.set('@ngrx/store', SystemJS.newModule(store));

// SystemJS.set('ace-builds/src-noconflict/ace', SystemJS.newModule(ace));
// SystemJS.set('ace-builds/src-noconflict/theme-chrome', SystemJS.newModule(aceChrome));
// SystemJS.set('ace-builds/src-noconflict/mode-html.js', SystemJS.newModule(aceHtml));
// SystemJS.set('ace-builds/src-noconflict/mode-sql.js', SystemJS.newModule(aceSql));

// SystemJS.set('froala-editor/js/froala_editor.min.js', SystemJS.newModule(froalaEditor));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
