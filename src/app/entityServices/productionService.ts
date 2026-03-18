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
        this.productions = this.GetAll();
        this.productions.forEach((production) =>
        {
            if(!production.mppt[0].reference.toString().includes(reference)){
                this.productions.splice(this.productions.indexOf(production,1))
            }
        })
        return this.productions;
    }

    GetSumOfLatestProductions() : any{
        this.productions = this.GetAll();
        this.mpptDict = new Map<string, number>();
        this.lastProduction = 0;
        
        this.productions.forEach((production) =>
        {
            if(!this.mpptDict.has(production.mppt[0].reference)){
                this.mpptDict.set(production.mppt[0].reference, this.dataService.getById("production", production.mppt[0].reference)[this.dataService.getById("production", production.mppt[0].reference).length - 1])
                this.lastProduction += Number.parseFloat(production.production);
            }
        });
        return this.lastProduction;
    }

}