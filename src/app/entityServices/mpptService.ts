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

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("mppt");

        this.mppts = [];

        for(let data of userArray.data){
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
        this.mppts = this.GetAll();
        this.mppts.forEach((mppt) => {
            this.mpptReference = mppt.reference;
            if(mppt.reference === reference){
                this.mpptsToReturn.push(mppt);
            }
        })
        return this.mpptsToReturn;
    }

    GetSumOfAllPower() : number{
        this.powerIn = 0;
        this.mppts = this.GetAll();
        this.mppts.forEach((mppt)=>{
            this.powerIn += mppt.powerIn;
        })
        return 0;
    }
}