import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private autenticacaoService: AutenticacaoService,
    private alertService: AlertService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // if (this.autenticacaoService.isLoggedIn) {
    //     this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.autenticacaoService.logout();
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    if (this.loginForm.invalid) {
      return;
    }

    this.autenticacaoService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
      .subscribe(
        data => {
          this.router.navigate(['/produtos/home']);
        },
        error => {
          this.alertService.error(error);
          //this.loading = false;
        });
  }

}