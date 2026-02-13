import { DataService } from "./dataService";
import { Consumption } from "../entity/consumption";

export class ConsumptionService{
    dataService : any;
    consumptions : any[] = [];

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("consumption");

        this.consumptions = [];

        for(let data of userArray.data){
            this.consumptions.push(new Consumption(data.ID, data.inverter_id, data.provider_id, data.DATE));
        }

        return this.consumptions;
    }
}