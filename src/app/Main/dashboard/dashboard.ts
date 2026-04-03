import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAllPrimeng } from '../../assets/appAllPrimeng.module';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import moment from 'moment';

import { Mppt } from '../../entity/mppt';
import { User } from '../../entity/user';
import { Battery } from '../../entity/battery';
import { Consumption } from '../../entity/consumption';
import { EnergyProvider } from '../../entity/energyProvider';
import { Inverter } from '../../entity/inverter';
import { Production } from '../../entity/production';

import { UserService } from '../../entityServices/userService';
import { BatteryService } from '../../entityServices/batteryService';
import { ConsumptionService } from '../../entityServices/consumptionService';
import { EnergyProviderService } from '../../entityServices/energyProviderService';
import { InverterService } from '../../entityServices/inverterService';
import { MpptService } from '../../entityServices/mpptService';
import { ProductionService } from '../../entityServices/productionService';
import { ChangeDetectionStrategy } from '@angular/core';

interface timeFrame {
    name: string;
    code: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, AppAllPrimeng],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush
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

  //Resumé des stats
  ratioIcon : String = "";
  lastProd : number = 0;
  productionRatio : String = "";
  ratioPolarity : boolean = true;

  // Météo
  cityName: string = 'Évreux';
  weatherData: any;
  currentDate: string = '';
  error: string = '';
  currentTemp: number | null = null;
  currentCloudiness: number | null = null;


    private url = 'https://api.openweathermap.org/data/2.5/weather';
    private apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

    constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

    getWeather(): void {
        this.error = '';
        const fullUrl = `${this.url}?q=${this.cityName}&appid=${this.apiKey}&units=metric`;
        
        this.http.get(fullUrl).subscribe(
          (data: any) => {
            this.weatherData = data;
            this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
            document.getElementById('weather-info')?.style.setProperty('display', 'block');
            this.currentTemp = this.weatherData?.main?.temp ?? null;
            this.currentCloudiness = this.weatherData?.clouds?.all ?? null;
            this.cd.detectChanges();
          },
          (error) => {
            this.error = 'City not found. Please try again.';
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
      //this.data.labels.push(formatDate(data.date, "hh:mm:ss", 'en-US'));
      this.data.datasets[0].data.push(data.production);
    }

    /*for(let data of this.consumptionService.GetAll()){
      this.data.datasets[1].data.push(data.consumption);
    }*/
  }

  init() {
    this.userService = new UserService();
    this.batteryService = new BatteryService();
    this.consumptionService = new ConsumptionService();
    this.energyProviderService = new EnergyProviderService();
    this.inverterService = new InverterService();
    this.mpptService = new MpptService();
    this.productionService = new ProductionService();

    this.lastProd = this.getLastProduction();
    this.ratioPolarity = this.getRatio();
    this.productionRatio = this.getFinalProductionRatio().toString();
    this.ratioIcon = this.getRatioIcon();
  }

  getLastProduction(){
    return this.productionService.GetSumOfLatestProductions();
  }
  /*getLastConsommation(){
    return this.consumptionService.GetLast().consumption;
  }*/

  getFinalProductionRatio(){
    const finalRatio = ((this.ratioPolarity)? "" : "+") 
    + (this.mpptService.GetSumOfAllPower() /*- this.consumptionService.GetLast().consumption*/);
    return finalRatio;
  }
  getRatio(){
    return this.mpptService.GetSumOfAllPower() /*- this.consumptionService.GetLast().consumption*/ < 0;
  }

  getRatioIcon() : String{
    const finalRatio = (this.ratioPolarity)? 
    "pi pi-arrow-down" : "pi pi-arrow-up"
    return finalRatio;
  }
}