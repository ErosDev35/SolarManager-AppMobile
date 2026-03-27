import { Status_enum } from "./status_enum";

export class Mppt{
    id : number;
    name : String;
    intensityIn : number;
    intensityOut : number;
    voltageIn : number;
    status : Status_enum;
    powerIn : number;
    reference : String;
    date : Date;

    constructor(id : number,intensityIn : number,intensityOut : number,voltageIn : number,status : Status_enum,powerIn : number, reference : String = "",date : Date,name : String = ""){
        this.id = id;
        this.intensityIn = intensityIn;
        this.intensityOut = intensityOut;
        this.voltageIn = voltageIn;
        this.status = status;
        this.powerIn = powerIn;
        this.name = name;
        this.reference = reference;
        this.date = date;
    }
}