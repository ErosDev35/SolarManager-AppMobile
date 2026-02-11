import { Component} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Login } from "./login/login";
import { Dashboard } from "./dashboard/dashboard";
import { MenuHeader } from './menu-header/menu-header';
import { MenuBottom } from './menu-bottom/menu-bottom';
import { IntroCutscene } from './login/intro-cutscene/intro-cutscene';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, CardModule, Login, Dashboard, MenuHeader, MenuBottom, IntroCutscene],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  public logged : boolean;
  public introShowed : boolean;

  constructor(public login : Login) {
    this.logged = window.sessionStorage.getItem('logged') === 'true';
    this.introShowed = window.sessionStorage.getItem('introShowed') === 'true'
  }

}
