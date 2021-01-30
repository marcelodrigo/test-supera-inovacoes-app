import { Component, OnInit } from '@angular/core';

import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.autenticacaoService.logout();
    this.autenticacaoService.redirectToLogin();
  }

}
