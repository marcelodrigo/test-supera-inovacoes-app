import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AlertComponent } from '../core/component/alert/alert.component';


@NgModule({
  declarations: [
    LoginComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    AdministracaoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdministracaoModule { }
