import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { AccordionModule} from 'primeng/accordion';
import { ScrollerModule } from 'primeng/scroller';
import { DevicesMenu } from '../devices-menu/devices-menu';

@Component({
  selector: 'app-menu-bottom',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule, DrawerModule, AccordionModule, ScrollerModule, DevicesMenu],
  templateUrl: './menu-bottom.html',
  styleUrl: './menu-bottom.css',
})
export class MenuBottom {
  public menuDialog : boolean = false;
  
  openMenu() : void {
    this.menuDialog = !this.menuDialog;
  }

}
