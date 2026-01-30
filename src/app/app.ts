import { Component} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Login } from "./login/login";
import { Dashboard } from "./dashboard/dashboard";
import { MenuHeader } from './menu-header/menu-header';
import { MenuBottom } from './menu-bottom/menu-bottom';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, CardModule, Login, Dashboard, MenuHeader, MenuBottom],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  public logged : boolean;

  constructor(public login : Login) {
    this.logged = window.sessionStorage.getItem('logged') === 'true';
  }

}
