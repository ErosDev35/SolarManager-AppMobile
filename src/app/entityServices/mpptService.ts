import { Mppt } from "../entity/mppt";
import { DataService } from "./dataService";
import jsonDataNames from '../assets/dataMpptNames.json';

export class MpptService{
    dataService : any;
    mppt : any;
    mppts : any[] = [];
    mpptsToReturn : any[] = [];
    mpptId : String = "";
    mpptReference : String = "";
    data: any = null;
    powerIn : number = 0;

    async GetAll() : Promise<any>{
        this.dataService = new DataService();
        const mpptResponse = await this.dataService.getEntityData("mppt");
        const mpptArray = mpptResponse.data;

        this.mppts = [];

        for(let data of mpptArray){
            this.mppt = new Mppt(data.ID, data.INTENSITYIN, data.INTENSITYOUT, data.VOLTAGEIN, data.STATUS, data.POWERIN, data.ENERGYOUT,data.REFERENCE, data.DATE);
            this.mppt.name = (this.getMpptName(this.mppt) !== undefined)? this.getMpptName(this.mppt) : this.mppt.id;
            this.mppts.push(this.mppt);
        }
        return this.mppts;
    }

    getMpptName(mppt : Mppt) {
        this.data = (jsonDataNames as any).default ?? jsonDataNames;
        const dataArray = Array.isArray(this.data) ? this.data.find((t: any) => t?.ID === mppt.id) : undefined;

        return (dataArray !== undefined)? dataArray.NAME : undefined;
    }

    GetByReference(reference : String) : any{
        this.dataService = new DataService();
        const mpptArray = this.dataService.getEntityData("mppt/getByReference/" + reference);

        this.mppts = [];

        for(let data of mpptArray){
            this.mppts.push(new Mppt(data.ID, data.INTENSITYIN, data.INTENSITYOUT, data.VOLTAGEIN, data.STATUS, data.POWERIN, data.ENERGYOUT,data.REFERENCE, data.DATE));
        }

        return this.mppts;
    }

    async GetSumOfAllPower() : Promise<number>{
        this.powerIn = 0;
        this.mppts = await this.GetAll();
        this.mppts.forEach((mppt)=>{
            this.powerIn += mppt.powerIn;
        })
        return this.powerIn;
    }

    async GetAllOfToday() : Promise<any>{
        this.dataService = new DataService();
        const mpptResponse = await this.dataService.getEntityData("mppt/getTodayTotal/");

        this.mppts = [];

        for(let data of mpptResponse.data){
            this.mppt = new Mppt(data.ID, data.INTENSITYIN, data.INTENSITYOUT, data.VOLTAGEIN, data.STATUS, data.POWERIN, data.ENERGYOUT,data.REFERENCE, data.DATE);
            this.mppt.name = (this.getMpptName(this.mppt) !== undefined)? this.getMpptName(this.mppt) : this.mppt.id;
            this.mppts.push(this.mppt);
        }
        console.log(this.mppts);
        return this.mppts;
    }
}