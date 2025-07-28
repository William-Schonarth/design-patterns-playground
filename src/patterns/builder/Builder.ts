// ref: https://refactoring.guru/pt-br/design-patterns/builder

class Car {
  brand: string = "Fiat"
  model: string = "Uno"
  color: string = "Red"
  engine: string = "1.0"
  doors: number = 2

  specs(): string {
    return `${this.brand} ${this.model} (${this.color}) - ${this.engine} with ${this.doors} doors`
  }
}

export class CarBuilder {
  private readonly car: Car

  constructor() {
    this.car = new Car()
  }

  setBrand(brand: string): this {
    this.car.brand = brand
    return this
  }

  setModel(model: string): this {
    this.car.model = model
    return this
  }

  setColor(color: string): this {
    this.car.color = color
    return this
  }

  setEngine(engine: string): this {
    this.car.engine = engine
    return this
  }

  setDoors(doors: number): this {
    this.car.doors = doors
    return this
  }

  build(): Car {
    return this.car
  }
}
