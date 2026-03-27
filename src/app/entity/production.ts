import { Mppt } from "./mppt";
import { MpptService } from "../entityServices/mpptService";

export class Production{
    id : number;
    date : Date;
    mppt : Mppt | null;
    mpptReference : string;
    production : number;

    constructor(id : number,date : Date, mpptReference : string,production : number)
    {
        this.id = id;
        this.date = date;
        this.mpptReference = mpptReference;
        this.mppt = null;
        this.production = production;
    }
}