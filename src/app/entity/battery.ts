export class Battery
{
    id : number;
    name : String;
    stateOfHealth : number;
    intensity : number;
    date : Date;
    voltage : number;

    constructor(id : number, name : String
        , stateOfHealth : number, intensity : number, 
        date : Date, voltage : number)
    {    
        this.id = id;
        this.name = name;
        this.stateOfHealth = stateOfHealth;
        this.intensity = intensity;
        this.date = date;
        this.voltage = voltage;
    }
}