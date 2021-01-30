import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticatedTemplateComponent } from 'src/app/core/component/authenticated-template/authenticated-template.component';
import { AutenticacaoGuard } from 'src/app/core/guard/autenticacao.guard';
import { HomeComponent } from 'src/app/produtos/home/home.component';

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
                }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class ProdutosRoutingModule {
}
