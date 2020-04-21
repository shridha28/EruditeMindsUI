import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { SignUpLoginComponent} from './CustomerApp.SignUpLoginComponent'
import { SignUpLoginRoutes } from '../Routing/CustomerApp.SignUpLoginRouting';




@NgModule({
  declarations: [
    SignUpLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,RouterModule.forChild(SignUpLoginRoutes)
  ],
  providers: [],
  bootstrap: [SignUpLoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignUpLoginModule { }
