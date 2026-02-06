import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { Drawer, DrawerModule } from 'primeng/drawer';


@Component({
  selector: 'app-login',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule, MessageModule,DrawerModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
@Injectable({
  providedIn: 'root',
})
export class Login {
  public logged : boolean = false;
  public showLogin = !this.logged;
  public username : string = '';
  public password : string = '';

  onLogin() : void {
    let usernameValid: boolean = false;
    let passwordValid: boolean = false;

     usernameValid = this.username === "admin";

        if (usernameValid) {
          passwordValid = this.password === "secret";
        }

        if (usernameValid && passwordValid) {
          this.logged = true;
          window.sessionStorage.setItem('logged', 'true');
          window.sessionStorage.setItem('username', this.username);
          window.location.reload();
        } else {
          alert('Invalid credentials');
          window.location.reload();
        }

        console.log("Login button clicked " + "Username : " + this.username + " / " + "Password : " + this.password);
      }
  }
