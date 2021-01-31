import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticatedTemplateComponent } from 'src/app/core/component/authenticated-template/authenticated-template.component';
import { AutenticacaoGuard } from 'src/app/core/guard/autenticacao.guard';
import { HomeComponent } from 'src/app/produtos/home/home.component';
import { AlterarProdutoComponent } from './pages/alterar-produto/alterar-produto.component';
import { CriarProdutoComponent } from './pages/criar-produto/criar-produto.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'produtos',
            component: AuthenticatedTemplateComponent,
            canActivate: [AutenticacaoGuard],
            children: [
                {
                    path: 'home',
                    component: HomeComponent
                },
                {
                    path: 'criacao',
                    component: CriarProdutoComponent
                },
                {
                    path: 'atualizacao',
                    component: AlterarProdutoComponent
                }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class ProdutosRoutingModule {
}
