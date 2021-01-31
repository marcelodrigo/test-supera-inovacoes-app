import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoService } from './services/autenticacao.service';
import { AuthenticatedTemplateComponent } from './component/authenticated-template/authenticated-template.component';
import { AutenticacaoGuard } from './guard/autenticacao.guard';
import { HeaderComponent } from './component/header/header.component';
import { AlertComponent } from './component/alert/alert.component';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthenticatedTemplateComponent,
    HeaderComponent,
    AlertComponent
  ],
  providers: [
    HttpClient,
    AutenticacaoService,
    AutenticacaoGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AuthenticatedTemplateComponent,
    HeaderComponent,
    AlertComponent,
    FormsModule
  ]
})
export class CoreModule { }
