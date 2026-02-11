export class Battery
{
    id : number;
    capacity : number;
    name : String;
    stateOfHealth : number;
    nbCycle : number;
    intensity : number;
    date : Date;

    constructor(id : number, capacity : number, name : String
        , stateOfHealth : number, nbCycle : number, intensity : number, date : Date)
    {    
        this.id = id;
        this.capacity = capacity;
        this.name = name;
        this.stateOfHealth = stateOfHealth;
        this.nbCycle = nbCycle;
        this.intensity = intensity;
        this.date = date;
    }
}