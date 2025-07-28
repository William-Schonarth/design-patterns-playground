import { CarBuilder } from "./Builder"

describe("Builder Pattern - Car", () => {
  it("should build a complete car", () => {
    const car = new CarBuilder()
      .setBrand("Toyota")
      .setModel("Corolla")
      .setColor("Black")
      .setEngine("2.0 Flex")
      .setDoors(4)
      .build()

    expect(car.specs()).toBe("Toyota Corolla (Black) - 2.0 Flex with 4 doors")
  })

  it("should allow partial builds", () => {
    const car = new CarBuilder().setBrand("Tesla").setModel("Model 3").build()

    expect(car.brand).toBe("Tesla")
    expect(car.model).toBe("Model 3")
  })

  it("should build a complete car with default values", () => {
    const car = new CarBuilder().build()

    expect(car.specs()).toBe("Fiat Uno (Red) - 1.0 with 2 doors")
  })
})
