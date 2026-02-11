import { Mppt } from "./mppt";

export class Production{
    id : number;
    date : Date;
    mppt : Mppt;
    production : number;

    constructor(id : number,date : Date,mppt : Mppt,production : number)
    {
        this.id = id;
        this.date = date;
        this.mppt = mppt;
        this.production = production;
    }
}