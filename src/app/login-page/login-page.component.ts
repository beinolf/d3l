
import { Component } from '@angular/core';
/*
import { Router, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService, Login } from '../core/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
*/

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  /*
    errorMessage: String = '';
    userCookie: 'UserCookie';
    cookieValue: number;
    loginForm: FormGroup;
    public login: Login;

    constructor(
      private loginService: LoginService,
      private router: Router,
      private cookie: CookieService,
      private fb: FormBuilder) {
      this.createForm();
    }

    createForm() {
      this.loginForm = this.fb.group({
        userName: ['', Validators.required ],
        password: ['', Validators.required]
     });
    }


    tryLogin(username, password) {
      this.loginService.tryLogin(username, password).subscribe(data => this.login = data,
        error => this.handleError(),
        () => this.onComplete());
    }

    handleError() {
      console.log('try again');
    }

    onComplete() {
      if (this.login.valid) {
        this.cookie.set(this.userCookie, this.login.userid.toString());
        if (this.login.admin) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      } else {
        this.router.navigate(['/login']);
      }
    }

  }
  */
}
