import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Dialog, DialogModule } from 'primeng/dialog';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Drawer, DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-menu-header',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule, DialogModule,DrawerModule],
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
