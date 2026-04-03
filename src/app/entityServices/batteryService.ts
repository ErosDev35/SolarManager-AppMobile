import { DataService } from "./dataService";
import { Battery } from "../entity/battery";

export class BatteryService{
    dataService : any;
    batteries : any[] = [];

    GetAll() : any{
        this.dataService = new DataService();
        const batteryArray = this.dataService.getEntityData("battery");
        
        this.batteries = [];

        for(let data of batteryArray){
            this.batteries.push(new Battery(data.ID, data.NAME, data.STATEOFHEALTH, data.INTENSITY, data.DATE, data.VOLTAGE));
        }

        return this.batteries;
    }
}