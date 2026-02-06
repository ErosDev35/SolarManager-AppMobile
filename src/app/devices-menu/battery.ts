export class Battery {
    name: string;
    capacity: number;
    currentCharge: number;

    constructor(name: string, capacity: number, currentCharge: number) {
      this.name = name;
      this.capacity = capacity;
      this.currentCharge = currentCharge;
    }
  }