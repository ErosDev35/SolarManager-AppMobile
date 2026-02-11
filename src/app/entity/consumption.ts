import { EnergyProvider } from "./energyProvider";
import { Inverter } from "./inverter";


export class Consumption{
    id : number;
    inverter : Inverter;
    provider : EnergyProvider;
    date : Date;

    constructor(id : number, inverter : Inverter, provider : EnergyProvider, date : Date){
        this.id = id;
        this.inverter = inverter;
        this.provider = provider;
        this.date = date;
    }
}