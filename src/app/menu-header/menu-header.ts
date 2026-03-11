import { Injectable, Component } from '@angular/core';
import { AppAllPrimeng } from '../assets/appAllPrimeng.module';

@Component({
  selector: 'app-menu-header',
  imports: [AppAllPrimeng],
  templateUrl: './menu-header.html',
  styleUrl: './menu-header.css',
})
@Injectable({
  providedIn: 'root',
})
export class MenuHeader {
  public menuDialog : boolean = false;
  public username = window.sessionStorage.getItem('username');
  
  clickMenu() : void {
    this.menuDialog = !this.menuDialog;
  }
  disconnect() : void{
    window.sessionStorage.setItem('logged', 'false');
    window.sessionStorage.setItem('introShowed', 'false');
    window.location.reload();
  }
}
