import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { MoedaPipe } from '../core/pipes/moeda.pipe';
import { FormProdutoComponent } from './component/form-produto/form-produto.component';
import { CriarProdutoComponent } from './pages/criar-produto/criar-produto.component';
import { AlterarProdutoComponent } from './pages/alterar-produto/alterar-produto.component';


@NgModule({
  declarations: [HomeComponent, MoedaPipe, FormProdutoComponent, CriarProdutoComponent, AlterarProdutoComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    CoreModule
  ]
})
export class ProdutosModule { }