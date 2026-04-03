import { DataService } from "./dataService";
import { Inverter } from "../entity/inverter";

export class InverterService{
    dataService : any;
    inverters : any[] = [];

    async GetAll() : Promise<any>{
        this.dataService = new DataService();
        const inverterResponse = await this.dataService.getEntityData("inverter");
        const userArray = inverterResponse;

        this.inverters = [];

        for(let data of userArray.data){
            this.inverters.push(new Inverter(data.ID, data.POWEROUT, data.INTENSITYIN, data.ENERGYOUT, data.DATE));
        }

        return this.inverters;
    }
}