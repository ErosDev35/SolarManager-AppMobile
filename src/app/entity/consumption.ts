import { EnergyProvider } from "./energyProvider";
import { Inverter } from "./inverter";


export class Consumption{
    id : number;
    inverter : Inverter;
    provider : EnergyProvider;
    date : Date;
    consumption : number;

    constructor(id : number, inverter : Inverter, provider : EnergyProvider, date : Date, consumption : number){
        this.id = id;
        this.inverter = inverter;
        this.provider = provider;
        this.date = date;
        this.consumption = consumption;
    }
}