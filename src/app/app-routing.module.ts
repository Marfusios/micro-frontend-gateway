import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './components/error/error.component';

declare const SystemJS;

/**
 * Lazy load remote bundle (AOT compatible!)
 */
export const loadRemoteChildren = url =>
  SystemJS.import(`${url}/bundle.umd.min.js`)
    .then(module => module.EntryModule)
    .catch(err => {
      handleLoadError(url, err);
    });

const handleLoadError = function (url, err) {
  const msg = `Failed to load service from '${url}'.`;
  console.error(msg, err);
  // const msgEncoded = encodeURIComponent(msg);
  // window.location.href = `/error/${msgEncoded}`;
};

const routes: Routes = [
  {
    path: 'services',
    children: [
      {
        path: 'alpha',
        loadChildren: () => loadRemoteChildren('http://127.0.0.1:3333')
        // loadChildren: () => loadRemoteChildren('http://mkotas.cz/micro-frontend-alpha')
      },
      {
        path: 'beta',
        // loadChildren: () => loadRemoteChildren('http://127.0.0.1:4444')
        loadChildren: () => loadRemoteChildren('http://mkotas.cz/micro-frontend-beta')
      }
    ]
  },
  {
    path: 'error/:msg',
    component: ErrorComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
  // { path: '', redirectTo: 'services/alpha', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
