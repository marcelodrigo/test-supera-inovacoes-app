import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  sessionStorageKey = 'guardarLogin';
  vIsLoggedIn: boolean;

  constructor(private http: HttpClient, private router: Router) {

    this.vIsLoggedIn = false;

    const sessionStorageValue = sessionStorage.getItem(this.sessionStorageKey);

    //manter sessão
    if (sessionStorageValue != null) {
      this.vIsLoggedIn = true;
    }
  }

  get isLoggedIn() {
    return this.vIsLoggedIn;
  }

  login(username: string, password: string) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(`${username}:${password}`)
      })
    };
    //Accept: application/json;charset=UTF-8
    //Accept-Charset: UTF-8

    return this.http.post<any>(`${environment.loginURL}`, null, httpOptions)
      .pipe(map(response => {
        if (response.success) {
          this.vIsLoggedIn = true;
          sessionStorage.setItem(this.sessionStorageKey, this.vIsLoggedIn.toString());
        }
        else {
          throw new Error('Usuário ou senha inválido.');
        }
      })
      // ,
      // catchError(e => {
      //     throw
      // })
      );
  }

  logout() {
    sessionStorage.clear();
    this.vIsLoggedIn = false;
  }

  redirectToLogin() {
    this.router.navigate(['']);
  }
}
