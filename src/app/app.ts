import { Component, inject} from '@angular/core';
import { AppAllPrimeng } from './assets/appAllPrimeng.module';
import { Login } from "./login/login";
import { Dashboard } from "./Main/dashboard/dashboard";
import { MenuHeader } from './menu-header/menu-header';
import { MenuBottom } from './menu-bottom/menu-bottom';
import { IntroCutscene } from './login/intro-cutscene/intro-cutscene';
import { SelectDevice } from './Main/SelectDevice/select-device/select-device';

@Component({
  selector: 'app-root',
  imports: [AppAllPrimeng, Login, Dashboard, MenuHeader, MenuBottom, IntroCutscene, SelectDevice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  public logged : boolean;
  public introShowed : boolean;
  public displayDevice : boolean;

  constructor(public login : Login) {
    this.logged = window.sessionStorage.getItem('logged') === 'true';
    this.introShowed = window.sessionStorage.getItem('introShowed') === 'true';
    this.displayDevice = window.sessionStorage.getItem('displayDevice') === 'true';
  }

}
