import {ModernFurnitureFactory, TableShape, VintageFurnitureFactory} from "./AbstractFactory";

describe('Abstract Factory', () => {
  it('should create vintage furniture', () => {
    const factory = new VintageFurnitureFactory()
    const chair = factory.createChair()
    const table = factory.createTable()

    expect(chair.sit()).toBe('Sitting on a vintage chair')
    expect(table.use()).toBe('Using a vintage table')
  })

  it('should create modern furniture', () => {
    const factory = new ModernFurnitureFactory()
    const chair = factory.createChair()
    const table = factory.createTable()

    expect(chair.sit()).toBe('Sitting on a modern chair')
    expect(table.use()).toBe('Using a modern table')
  })

  it('should create a vintage rectangle table with drawers ', () => {
    const factory = new VintageFurnitureFactory()
    const table = factory.createTable(TableShape.Rectangle, true)

    expect(table.use()).toBe('Using a vintage table')
    expect(table.getProps()).toBe(`Table shape: rectangle, has drawers: true`)
  })

  it('should create a modern rounded table with drawers ', () => {
    const factory = new ModernFurnitureFactory()
    const table = factory.createTable(TableShape.Round, true)

    expect(table.use()).toBe('Using a modern table')
    expect(table.getProps()).toBe(`Table shape: round, has drawers: true`)
  })
})