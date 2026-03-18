export class Battery
{
    id : number;
    capacity : number;
    name : String;
    stateOfHealth : number;
    nbCycle : number;
    intensity : number;
    date : Date;
    voltage : number;

    constructor(id : number, capacity : number, name : String
        , stateOfHealth : number, nbCycle : number, intensity : number, 
        date : Date, voltage : number)
    {    
        this.id = id;
        this.capacity = capacity;
        this.name = name;
        this.stateOfHealth = stateOfHealth;
        this.nbCycle = nbCycle;
        this.intensity = intensity;
        this.date = date;
        this.voltage = voltage;
    }
}