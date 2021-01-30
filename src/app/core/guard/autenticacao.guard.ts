import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//import {CanActivate, Router} from '@angular/router';

import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(private autenticacaoService: AutenticacaoService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.autenticacaoService.isLoggedIn) {
        return true;
      }
      else {
        //this.autenticacaoService.redirecionarLogin();
        return false;
      }
  }
  
}


