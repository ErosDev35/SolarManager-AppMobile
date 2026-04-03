import { DataService } from "./dataService";
import { Battery } from "../entity/battery";

export class BatteryService{
    dataService : any;
    batteries : any[] = [];

    async GetAll() : Promise<any>{
        this.dataService = new DataService();
        const batteryResponse = await this.dataService.getEntityData("battery");
        const batteryArray = batteryResponse.data;
        
        this.batteries = [];

        for(let data of batteryArray){
            this.batteries.push(new Battery(data.ID, data.NAME, data.STATEOFHEALTH, data.INTENSITY, data.DATE, data.VOLTAGE));
        }

        return this.batteries;
    }
}