import { EnergyProvider } from "../entity/energyProvider";
import { DataService } from "./dataService";

export class EnergyProviderService{
    dataService : any;
    energyProviders : any[] = [];

    async GetAll() : Promise<any>{
        this.dataService = new DataService();
        const providerResponse = await this.dataService.getEntityData("provider");
        const userArray = providerResponse;

        this.energyProviders = [];

        for(let data of userArray.data){
            this.energyProviders.push(new EnergyProvider(data.ID, data.INTENSITY, data.POWER, data.ENERGY, data.DATE));
        }

        return this.energyProviders;
    }
}