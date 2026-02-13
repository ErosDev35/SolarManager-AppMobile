import { Component, OnInit, inject } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { AccordionModule } from 'primeng/accordion';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { SelectModule, SelectItem } from 'primeng/select';

import { Mppt } from '../entity/mppt';
import { User } from '../entity/user';
import { Battery } from '../entity/battery';
import { Consumption } from '../entity/consumption';
import { EnergyProvider } from '../entity/energyProvider';
import { Inverter } from '../entity/inverter';
import { Production } from '../entity/production';

import { UserService } from '../entityServices/userService';
import { BatteryService } from '../entityServices/batteryService';
import { ConsumptionService } from '../entityServices/consumptionService';
import { EnergyProviderService } from '../entityServices/energyProviderService';
import { InverterService } from '../entityServices/inverterService';
import { MpptService } from '../entityServices/mpptService';
import { ProductionService } from '../entityServices/productionService';

interface timeFrame {
    name: string;
    code: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule, MessageModule, ChartModule, AccordionModule, SelectModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard{
  options: any;
  data : any;
  userService : any;
  batteryService : any;
  consumptionService : any;
  energyProviderService : any;
  inverterService : any;
  mpptService : any;
  productionService : any;

  timeFrameList: timeFrame[] = [
        { name: 'Ce jour-ci', code: 'today' },
        { name: 'Cette semaine', code: 'week' },
        { name: 'Ce mois-ci', code: 'month' },
        { name: 'Cette année', code: 'year' }
      ];
  selectedTimeframe: timeFrame | undefined;
  
  ngOnInit() {
      this.init();
      this.initChart();
  }

  initChart(){
    this.data = {
      labels: [],
      datasets: [
        {
          label: 'Production',
          data: [],
          fill: true,
          tension: 0.4
        },
        {
          label: 'Consommation',
          data: [],
          fill: true,
          tension: 0.4
        }
      ]
    }
    for(let data of this.productionService.GetAll()){
      this.data.labels.push(data.date);
      this.data.datasets[0].data.push(data.production);
      console.log(this.data.labels);
    }
    for(let data of this.consumptionService.GetAll()){
      this.data.datasets[1].data.push(data.consumption);
      console.log(this.data.labels);
    }
  }

  init() {
    this.userService = new UserService();
    this.batteryService = new BatteryService();
    this.consumptionService = new ConsumptionService();
    this.energyProviderService = new EnergyProviderService();
    this.inverterService = new InverterService();
    this.mpptService = new MpptService();
    this.productionService = new ProductionService();

    console.log(this.userService.GetAll());
    console.log(this.batteryService.GetAll());
    console.log(this.consumptionService.GetAll());
    console.log(this.energyProviderService.GetAll());
    console.log(this.inverterService.GetAll());
    console.log(this.mpptService.GetAll());
    console.log(this.productionService.GetAll());
  }
}