import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { AuthenticatedTemplateComponent } from '../shared/component/authenticated-template/authenticated-template.component';
//import { AutenticacaoGuard } from '../core/services/autenticacao-guard';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'administracao',
            children: [
                {
                    path: 'login',
                    component: LoginComponent
                }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class AdministracaoRoutingModule {
}
