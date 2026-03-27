export class Consumption{
    id : number;
    inverter : String;
    provider : String;
    date : Date;
    consumption : number;

    constructor(id : number, inverterReference : String, providerReference : String, date : Date, consumption : number){
        this.id = id;
        this.inverter = inverterReference;
        this.provider = providerReference;
        this.date = date;
        this.consumption = consumption;
    }
}