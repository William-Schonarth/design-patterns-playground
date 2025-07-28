// ref: https://refactoring.guru/pt-br/design-patterns/factory-method

interface Transport {
  deliver(): string
}

class Truck implements Transport {
  deliver(): string {
    return "Truck delivery"
  }
}

class Ship implements Transport {
  deliver(): string {
    return "Ship delivery"
  }
}

export enum TransportType {
  Truck = "truck",
  Ship = "ship",
}

export class TransportFactory {
  static create(type: TransportType): Transport {
    switch (type) {
      case TransportType.Truck:
        return new Truck()
      case TransportType.Ship:
        return new Ship()
      default:
        throw new Error(`Invalid transport type: ${type}`)
    }
  }
}
