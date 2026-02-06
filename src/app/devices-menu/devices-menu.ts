import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { AccordionModule} from 'primeng/accordion';
import { ScrollerModule } from 'primeng/scroller';
import { Battery } from './battery';
import { Mppt } from './mppt';

@Component({
  selector: 'app-devices-menu',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule, DrawerModule, AccordionModule, ScrollerModule],
  templateUrl: './devices-menu.html',
  styleUrl: './devices-menu.css',
})

export class DevicesMenu {
  batteries: Battery[] = [
    new Battery('Batterie 1', 100, 75),
    new Battery('Batterie 2', 150, 50),
    new Battery('Batterie 3', 200, 25)
  ];

  mppt: Mppt[] = [
    new Mppt('Mppt 1', 120, 50),
    new Mppt('Mppt 2', 220, 75),
    new Mppt('Mppt 1', 120, 50)
  ]
}
