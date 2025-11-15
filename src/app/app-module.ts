import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CarList } from './components/car-list/car-list';
import { CarDetails } from './components/car-details/car-details';
import { Home } from './components/home/home';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Nav } from './components/nav/nav';
import { FormsModule } from '@angular/forms';
import { Expensive } from './directives/expensive';
import { HufPipe } from './pipes/huf-pipe';

@NgModule({
  declarations: [
    App,
    CarList,
    CarDetails,
    Home,
    PageNotFound,
    Nav,
    Expensive,
    HufPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
