import { Production } from "../entity/production";
import { DataService } from "./dataService";

export class ProductionService{
    dataService : any;
    productions : any[] = [];
    lastProduction : any;
    mpptDict = new Map<string, number>();

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("production");

        this.productions = [];

        for(let data of userArray.data){
            this.productions.push(new Production(data.ID,data.DATE,data.MPPT_ID,data.PRODUCTION));
        }

        return this.productions;
    }

    GetLast() : any{
        this.productions = this.GetAll();
        this.lastProduction = this.productions[this.productions.length - 1];

        return this.lastProduction;
    }

    GetSumOfLatestProductions() : any{
        this.productions = this.GetAll();

        this.mpptDict = new Map<string, number>();
        this.lastProduction = 0;
        
        this.productions.forEach((production) =>
        {
            if(!this.mpptDict.has(production.mppt_id)){
                this.mpptDict.set(production.id, this.dataService.getById("production", production.id)[this.dataService.getById("production", production.id).length - 1])
                this.lastProduction += Number.parseFloat(production.production);
            }
        })
        console.log(this.mpptDict);

        return this.lastProduction;
    }
}