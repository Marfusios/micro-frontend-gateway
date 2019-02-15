import { AgGridModule } from 'ag-grid-angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ComponentLoaderService } from './services/component-loader-service/component-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    AgGridModule.withComponents([]),
  ],
  providers: [
    ComponentLoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
