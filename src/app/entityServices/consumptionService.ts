import { DataService } from "./dataService";
import { Consumption } from "../entity/consumption";

export class ConsumptionService{
    dataService : any;
    consumptions : any[] = [];
    lastConsumption : any;
    consumptionSum : any[] = [];
    mpptDict : any = new Map<string, number>();

    async GetAll() : Promise<any>{
        this.dataService = new DataService();
        const consumptionResponse = await this.dataService.getEntityData("consumption");
        const consumptionArray = consumptionResponse.data;

        this.consumptions = [];

        for(let data of consumptionArray){
            this.consumptions.push(new Consumption(data.ID, data.inverter_id, data.provider_id, data.DATE, data.CONSUMPTION));
        }
        return this.consumptions;
    }

    async GetLast() : Promise<any>{
        this.consumptions = await this.GetAll();
        this.lastConsumption = this.consumptions[this.consumptions.length - 1];
        return this.lastConsumption;
    }
}