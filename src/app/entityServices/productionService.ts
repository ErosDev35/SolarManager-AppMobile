import { Production } from "../entity/production";
import { DataService } from "./dataService";

export class ProductionService{
    dataService : any;
    productions : any[] = [];
    lastProduction : any;

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

        console.log(this.lastProduction);
        return this.lastProduction;
    }
}