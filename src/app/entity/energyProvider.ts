export class EnergyProvider{
    id : number;
    intensity : number;
    power : number;
    energy : number;
    date : Date;

    constructor(id : number,intensity : number,power : number,energy : number,date : Date)
    {
        this.id = id;
        this.intensity = intensity;
        this.power = power;
        this.energy = energy;
        this.date = date;
    }
}