//ref: https://refactoring.guru/pt-br/design-patterns/abstract-factory

interface Chair {
  sit(): string
}

export enum TableShape {
  Square = "square",
  Rectangle = "rectangle",
  Round = "round",
}

interface Table {
  shape: TableShape
  hasDrawers: boolean

  use(): string
  getProps(): string
}

interface FurnitureFactory {
  createChair(): Chair

  createTable(shape?: TableShape, hasDrawers?: boolean): Table
}

class VintageChair implements Chair {
  sit(): string {
    return 'Sitting on a vintage chair'
  }
}

class VintageTable implements Table {
  constructor(
    public shape: TableShape = TableShape.Square,
    public hasDrawers: boolean = false
  ) {
    this.shape = shape
    this.hasDrawers = hasDrawers
  }

  use(): string {
    return 'Using a vintage table'
  }

  getProps(): string {
    return `Table shape: ${this.shape}, has drawers: ${this.hasDrawers}`
  }
}

class ModernChair implements Chair {
  sit(): string {
    return 'Sitting on a modern chair'
  }
}

class ModernTable implements Table {
  constructor(
    public shape: TableShape = TableShape.Square,
    public hasDrawers: boolean = false
  ) {
    this.shape = shape
    this.hasDrawers = hasDrawers
  }

  use(): string {
    return 'Using a modern table'
  }

  getProps(): string {
    return `Table shape: ${this.shape}, has drawers: ${this.hasDrawers}`
  }
}

export class VintageFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VintageChair()
  }

  createTable(shape?: TableShape, hasDrawers?: boolean): Table {
    return new VintageTable(shape, hasDrawers)
  }
}

export class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair()
  }

  createTable(shape?: TableShape, hasDrawers?: boolean): Table {
    return new ModernTable(shape, hasDrawers)
  }
}