import { Production } from "../entity/production";
import { DataService } from "./dataService";

export class ProductionService{
    dataService : any;
    productions : any[] = [];
    lastProduction : any;
    mpptDict = new Map<string, number>();

    async GetAll() : Promise<any>{
        this.dataService = new DataService();
        const productionResponse = await this.dataService.getEntityData("production");
        const productionArray = productionResponse.data;
        console.log(productionArray);
        this.productions = [];

        for(let data of productionArray){
            const dateValue = data.date || data.DATE;
            this.productions.push(new Production(
                data.id || data.ID,
                (dateValue) ? new Date(dateValue) : new Date(),
                data.mpptReference || data.mppt_reference,
                Number(data.production || data.PRODUCTION) || 0
            ));
            console.log()
        }
        return this.productions;
    }

    async GetLast() : Promise<any>{
        this.productions = await this.GetAll();
        this.lastProduction = this.productions[this.productions.length - 1];
        return this.lastProduction;
    }
    
    GetByMpptReference(reference : String) : any{
        this.dataService = new DataService();
        this.productions = [];
        const productionArray = this.dataService.getEntityData("production/getByReference/" + reference);

        for(let data of productionArray){
            this.productions.push(new Production(data.ID,data.DATE,data.mppt_reference,data.PRODUCTION));
        }
        
        return this.productions;
    }

    async GetSumOfLatestProductions() : Promise<any>{
        this.productions = await this.GetAll();
        console.log(this.productions);
        this.mpptDict = new Map<string, number>();
        this.lastProduction = 0;
        
        this.productions.forEach((production) =>
        {
            if(!this.mpptDict.has(production.mpptReference)){
                this.mpptDict.set(production.mpptReference, production.production);
                const prodValue = Number(production.production);
                if (!isNaN(prodValue)) {
                    this.lastProduction += prodValue;
                }
                console.log(this.lastProduction);
            }
        });

        console.log(this.lastProduction);
        return this.lastProduction;
    }

}