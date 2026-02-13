import { DataService } from "./dataService";
import { Inverter } from "../entity/inverter";

export class InverterService{
    dataService : any;
    inverters : any[] = [];

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("inverter");

        this.inverters = [];

        for(let data of userArray.data){
            this.inverters.push(new Inverter(data.ID, data.POWEROUT, data.INTENSITYIN, data.ENERGYOUT, data.DATE));
        }

        return this.inverters;
    }
}