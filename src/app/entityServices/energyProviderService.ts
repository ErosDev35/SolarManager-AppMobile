import { EnergyProvider } from "../entity/energyProvider";
import { DataService } from "./dataService";

export class EnergyProviderService{
    dataService : any;
    energyProviders : any[] = [];

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("provider");

        this.energyProviders = [];

        for(let data of userArray.data){
            this.energyProviders.push(new EnergyProvider(data.ID, data.INTENSITY, data.POWER, data.ENERGY, data.DATE));
        }

        return this.energyProviders;
    }
}