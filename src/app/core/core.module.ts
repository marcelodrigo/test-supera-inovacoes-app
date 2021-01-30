import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AutenticacaoService } from './services/autenticacao.service';
import { AuthenticatedTemplateComponent } from './component/authenticated-template/authenticated-template.component';
import { AutenticacaoGuard } from './guard/autenticacao.guard';
import { HeaderComponent } from './component/header/header.component';
import { AlertComponent } from './component/alert/alert.component';

@NgModule({
  declarations: [
    AuthenticatedTemplateComponent,
    HeaderComponent,
    AlertComponent
  ],
  providers: [
    HttpClient,
    AutenticacaoService,
    AutenticacaoGuard
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AuthenticatedTemplateComponent,
    HeaderComponent,
    AlertComponent
  ]
})
export class CoreModule { }
