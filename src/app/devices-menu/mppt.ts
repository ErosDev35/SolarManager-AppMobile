export class Mppt {
  name: string;
  production: number;
  productionRate: number;

  constructor(name: string, production: number, productionRate: number) {
      this.name = name;
      this.production = production;
      this.productionRate = productionRate;
  }
}