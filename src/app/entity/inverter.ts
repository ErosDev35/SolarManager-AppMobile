export class Inverter{
    id : number;
    powerOut : number;
    intensityIn : number;
    energyOut : number;
    date : Date;

    constructor(id : number, powerOut : number, intensityIn : number, energyOut : number, date : Date){
        this.id = id;
        this.powerOut = powerOut;
        this.intensityIn = intensityIn;
        this.energyOut = energyOut;
        this.date = date;
    }
}