import { DataService } from "./dataService";
import { Consumption } from "../entity/consumption";

export class ConsumptionService{
    dataService : any;
    consumptions : any[] = [];
    lastConsumption : any;
    consumptionSum : any[] = [];
    mpptDict : any = new Map<string, number>();

    GetAll() : any{
        this.dataService = new DataService();
        const consumptionArray = this.dataService.getEntityData("consumption");

        this.consumptions = [];

        for(let data of consumptionArray){
            this.consumptions.push(new Consumption(data.ID, data.inverter_id, data.provider_id, data.DATE, data.CONSUMPTION));
        }
        return this.consumptions;
    }

    GetLast() : any{
        this.consumptions = this.GetAll();
        this.lastConsumption = this.consumptions[this.consumptions.length - 1];
        return this.lastConsumption;
    }
}