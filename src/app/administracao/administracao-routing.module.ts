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
                // {
                //     path: '',
                //     component: AuthenticatedTemplateComponent,
                //     canActivate: [AutenticacaoGuard],
                //     children: [
                //         {
                //             path: 'auditoria',
                //             component: AuditoriaComponent
                //         },
                //     ]
                // },
                {
                    path: 'login',
                    component: LoginComponent
                },
                // {
                //     path: 'alterar-senha-provisoria',
                //     component: AlterarSenhaProvisoriaComponent
                // },
                // {
                //     path: 'recuperar-senha',
                //     component: RecuperarSenhaComponent
                // },
            ]
        }
    ])],
    exports: [RouterModule]
})
export class AdministracaoRoutingModule {
}
