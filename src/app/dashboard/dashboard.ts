import { Component, OnInit, inject } from '@angular/core';
import { AppAllPrimeng } from '../assets/appAllPrimeng.module';
import { HttpClient } from '@angular/common/http';

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
  imports: [AppAllPrimeng],
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
  finalRatio : String = "";
  cityName: string = 'Pune';
  weatherData: any;
  iconUrl: string = '';
  currentDate: string = '';
  loading: boolean = false;
  error: string = '';

    private url = 'https://api.openweathermap.org/data/2.5/weather';
    private apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

    constructor(private http: HttpClient) { }

    getWeather(): void {
        this.loading = true;
        this.error = '';
        const fullUrl = `${this.url}?q=${this.cityName}&appid=${this.apiKey}&units=metric`;
        this.http.get(fullUrl).subscribe(
            (data: any) => {
                this.weatherData = data;
                this.iconUrl = 'https://openweathermap.org/img/w/$%7Bdata.weather%5B0%5D.icon%7D.png%60';
                this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
                document.getElementById('weather-info')?.style.setProperty('display', 'block');
                this.loading = false;
            },
            (error) => {
                this.error = 'City not found. Please try again.';
                this.loading = false;
                console.error('Error fetching weather data:', error);
            }
        );
    }

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
      this.getWeather();
  }

  initChart(){
    this.data = {
      labels: [],
      datasets: [{label: 'Production', data: [], fill: true, tension: 0.4},
        {label: 'Consommation', data: [], fill: true, tension: 0.4}]
    }
    for(let data of this.productionService.GetAll()){
      this.data.labels.push(data.date);
      this.data.datasets[0].data.push(data.production);
    }

    for(let data of this.consumptionService.GetAll()){
      this.data.datasets[1].data.push(data.consumption);
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

    console.log(this.productionService.GetAll());
  }

  getLastProduction(){
    return this.productionService.GetSumOfLatestProductions();
  }
  getLastConsommation(){
    return this.consumptionService.GetSumOfLatestConsumptions();
  }
  getFinalProductionRatio(){
    this.finalRatio = ((this.getRatio())? "" : "+") 
    + (this.productionService.GetSumOfLatestProductions() - this.consumptionService.GetSumOfLatestConsumptions());
    return this.finalRatio;
  }
  getRatio(){
    return this.productionService.GetSumOfLatestProductions() - this.consumptionService.GetSumOfLatestConsumptions() < 0;
  }

  getRatioIcon() : String{
    this.finalRatio = (this.getRatio())? 
    "pi pi-arrow-circle-down" : "pi pi-arrow-circle-up"
    console.log(this.finalRatio);
    return this.finalRatio;
  }

  getRationColor() : String{
    this.finalRatio = (this.getRatio())? 
    "color: rgb(255, 0, 0)" : "color: rgb(0, 161, 0);"
    console.log(this.finalRatio);
    return this.finalRatio;
  }
}