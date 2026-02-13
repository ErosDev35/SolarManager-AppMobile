import { Mppt } from "../entity/mppt";
import { DataService } from "./dataService";

export class MpptService{
    dataService : any;
    mppts : any[] = [];

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("mppt");

        this.mppts = [];

        for(let data of userArray.data){
            this.mppts.push(new Mppt(data.ID, data.INTENSITYIN, data.INTENSITYOUT, data.VOLTAGEIN, data.STATUS, data.POWERIN, data.ENERGYOUT));
        }

        return this.mppts;
    }
}