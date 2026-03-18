import { Injectable, Component } from '@angular/core';
import { AppAllPrimeng } from '../assets/appAllPrimeng.module';
import { DevicesMenu } from '../devices-menu/devices-menu';

@Component({
  selector: 'app-menu-bottom',
  imports: [AppAllPrimeng, DevicesMenu],
  templateUrl: './menu-bottom.html',
  styleUrl: './menu-bottom.css',
})
export class MenuBottom {
  public menuDialog : boolean = false;
  
  openMenu() : void {
    this.menuDialog = !this.menuDialog;
  }
  returnToDashboard(){
    window.sessionStorage.setItem('displayDevice', 'false');
    window.location.reload();
  }
}
