import { Injectable, OnInit, Component } from '@angular/core';
import { AppAllPrimeng } from '../assets/appAllPrimeng.module';

import { User } from '../entity/user';
import { Agent } from '../entity/agent';
import { UserService } from '../entityServices/userService';


@Component({
  selector: 'app-login',
  imports: [AppAllPrimeng],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
@Injectable({
  providedIn: 'root',
})
export class Login{
  logged : boolean = false;
  showLogin = !this.logged;
  username : string = '';
  password : string = '';

  userService : any;
  userToValidate : any;

  onLogin() : void {
    let usernameValid: boolean = false;
    let passwordValid: boolean = false;

    this.userService = new UserService;
    this.userToValidate = this.userService.GetByLogin(this.username);
    
    usernameValid = this.userToValidate !== null;
    passwordValid = this.userToValidate !== null && this.userToValidate.password === this.password;

    if (usernameValid && passwordValid) {
      this.logged = true;
      window.sessionStorage.setItem('logged', 'true');
      window.sessionStorage.setItem('username', this.userToValidate.login);
      window.location.reload();
    } else {
      alert('Invalid credentials');
      window.location.reload();
    }
  }
}
