import { Battery } from "./battery";

export class Mppt {
  name: string;
  production: number;
  productionRate: number;
  battery: Battery;

  constructor(name: string, production: number, productionRate: number, battery: Battery) {
      this.name = name;
      this.production = production;
      this.productionRate = productionRate;
      this.battery = battery;
  }
}