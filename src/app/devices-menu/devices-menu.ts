import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { AccordionModule} from 'primeng/accordion';
import { ScrollerModule } from 'primeng/scroller';
import { ProgressBarModule } from 'primeng/progressbar';

import { Battery } from '../entity/battery';
import { Mppt } from '../entity/mppt';

import { MpptService } from '../entityServices/mpptService';
import { BatteryService } from '../entityServices/batteryService';


@Component({
  selector: 'app-devices-menu',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule, DrawerModule, AccordionModule, ScrollerModule,ProgressBarModule],
  templateUrl: './devices-menu.html',
  styleUrl: './devices-menu.css',
})

export class DevicesMenu {
  batteryService : any;
  mpptService : any;
  mppt: Mppt[] = [];
  battery: Battery[] = [];

  anyMpptAvailable : boolean = this.mppt[0] != null;

  ngOnInit() {
      this.init();
  }

  init(){
    this.batteryService = new BatteryService();
    this.mpptService = new MpptService();
    this.mppt = this.mpptService.GetAll();
    this.battery = this.batteryService.GetAll();

    console.log(this.mppt);
    console.log(this.battery);

    this.anyMpptAvailable = this.mppt[0] != null;
  }
}
