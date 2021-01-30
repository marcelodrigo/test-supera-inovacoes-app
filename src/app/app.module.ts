import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//IMPORTS
import { Settings } from '../environments/settings';
import { CoreModule } from './core/core.module';
import { AdministracaoModule } from './administracao/administracao.module';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    // Features
    AdministracaoModule,
    ProdutosModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: (Settings.localeID) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
