import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';

import { AppRoutingModule } from '../app-routing.module';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';



@NgModule({
  declarations: [
    MasterPageComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
