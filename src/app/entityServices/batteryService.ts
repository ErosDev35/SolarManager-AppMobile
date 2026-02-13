import { DataService } from "./dataService";
import { Battery } from "../entity/battery";

export class BatteryService{
    dataService : any;
    batteries : any[] = [];

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("battery");
        
        this.batteries = [];

        for(let data of userArray.data){
            this.batteries.push(new Battery(data.ID, data.CAPACITY, data.NAME, data.STATEOFHEALTH, data.NBCYCLE, data.INTENSITY, data.DATE));
        }

        return this.batteries;
    }
}