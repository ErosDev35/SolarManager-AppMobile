import { Component, inject} from '@angular/core';
import { AppAllPrimeng } from '../../../assets/appAllPrimeng.module';
import { Mppt } from '../../../entity/mppt';
import { MpptService } from '../../../entityServices/mpptService';
import { ProductionService } from '../../../entityServices/productionService';

@Component({
  selector: 'app-select-device',
  imports: [AppAllPrimeng],
  templateUrl: './select-device.html',
  styleUrl: './select-device.css',
})
export class SelectDevice {
  mpptSelected : any;
  mpptService : any;
  productionService : any;
  showDevice : boolean = true;
  mpptData : any;
  options : any;
  mpptProductionRate : number = 0;

  constructor(){
    this.selectedDeviceInit();
  }
  selectedDeviceInit(){
    this.mpptService = new MpptService();
    this.productionService = new ProductionService();

    this.mpptSelected = this.mpptService.GetByReference(window.sessionStorage.getItem('selectedMpptReference'))
    [this.mpptService.GetByReference(window.sessionStorage.getItem('selectedMpptReference')).length - 1];

    this.mpptProductionRate = this.productionService.GetByMpptReference(this.mpptSelected.reference)[this.productionService.GetByMpptReference(this.mpptSelected.reference).length - 1].production / this.productionService.GetSumOfLatestProductions();
    
    this.mpptData = {
      labels: [this.mpptSelected.reference,"Production totale"],
      datasets: [{
        data: [this.mpptProductionRate,1 - this.mpptProductionRate],
        backgroundColor: ["#ff3c3cff","#cccccc"]
      }]
    }
  }
  getMpptProductionRate() : number{
    return Math.round((this.mpptProductionRate + Number.EPSILON) * 100) / 100;
  }
}
