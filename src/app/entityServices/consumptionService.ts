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
        const userArray = this.dataService.getEntityData("consumption");

        this.consumptions = [];

        for(let data of userArray.data){
            this.consumptions.push(new Consumption(data.ID, data.inverter_id, data.provider_id, data.DATE));
        }

        return this.consumptions;
    }

    GetLast() : any{
        this.consumptions = this.GetAll();
        this.lastConsumption = this.consumptions[this.consumptions.length - 1];


        return this.lastConsumption;
    }

    GetSumOfLatestConsumptions() : number{
        this.consumptions = this.GetAll();

        this.mpptDict = new Map<string, number>();
        this.consumptionSum = [];
        this.lastConsumption = 0;

        this.consumptions.forEach((consumption) =>
        {
            if(!this.mpptDict.has(consumption.id)){
                this.consumptionSum.push();
                this.mpptDict.set(consumption.id, consumption.inverter.energyOut)
                this.lastConsumption += consumption.inverter.energyOut;
            }
        })

        return this.lastConsumption;
    }
}