import { Mppt } from "./mppt";
import { MpptService } from "../entityServices/mpptService";

export class Production{
    id : number;
    date : Date;
    mppt : Mppt;
    production : number;
    mpptService : any;

    constructor(id : number,date : Date, mpptReference : String,production : number)
    {
        this.mpptService = new MpptService();
        this.id = id;
        this.date = date;
        this.mppt = this.mpptService.GetByReference(mpptReference);
        this.production = production;
    }
}