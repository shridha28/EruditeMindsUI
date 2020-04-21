import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,FormsModule,RouterModule.forChild(CustomerRoutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerModule { }
