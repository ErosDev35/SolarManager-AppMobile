import { Production } from "../entity/production";
import { DataService } from "./dataService";

export class ProductionService{
    dataService : any;
    productions : any[] = [];
    lastProduction : any;
    mpptDict = new Map<string, number>();

    GetAll() : any{
        this.dataService = new DataService();
        const productionArray = this.dataService.getEntityData("production");
        console.log(productionArray);
        this.productions = [];

        for(let data of productionArray){
            this.productions.push(new Production(data.ID,data.DATE,data.mppt_reference,data.PRODUCTION));
            console.log()
        }
        return this.productions;
    }

    GetLast() : any{
        this.productions = this.GetAll();
        this.lastProduction = this.productions[this.productions.length - 1];
        return this.lastProduction;
    }
    
    GetByMpptReference(reference : String) : any{
        this.dataService = new DataService();
        return this.dataService.getEntityData("production/");
    }

    GetSumOfLatestProductions() : any{
        this.productions = this.GetAll();
        console.log(this.productions);
        this.mpptDict = new Map<string, number>();
        this.lastProduction = 0;
        
        this.productions.forEach((production) =>
        {
            if(!this.mpptDict.has(production.mpptReference)){
                this.mpptDict.set(production.mpptReference, 
                    this.dataService.getById("production", production.mpptReference)[this.dataService.getById("production", production.mpptReference).length - 1])
                this.lastProduction += Number.parseFloat(production.production);
                console.log(this.lastProduction);
            }
        });

        console.log(this.lastProduction);
        return this.lastProduction;
    }

}