import { Component, OnInit, inject } from '@angular/core';
import { AppAllPrimeng } from '../assets/appAllPrimeng.module';

import { Battery } from '../entity/battery';
import { Mppt } from '../entity/mppt';

import { MpptService } from '../entityServices/mpptService';
import { BatteryService } from '../entityServices/batteryService';


@Component({
  selector: 'app-devices-menu',
  imports: [AppAllPrimeng],
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
          window.sessionStorage.setItem('displayDevice', 'false');

  }

  init(){
    this.batteryService = new BatteryService();
    this.mpptService = new MpptService();
    this.mppt = this.mpptService.GetAll();
    this.battery = this.batteryService.GetAll();

    this.anyMpptAvailable = this.mppt[0] != null;
  }

  openDeviceDisplay(selectedMppt : Mppt){
    window.sessionStorage.setItem('displayDevice', String(window.sessionStorage.getItem('displayDevice') === 'false'));
    window.sessionStorage.setItem('selectedMpptReference', String(selectedMppt.reference));
    window.location.reload();
  }
}
