import { TransportFactory, TransportType } from "./Factory"

describe("Factory Pattern", () => {
  it("should be a truck delivery", () => {
    const transport = TransportFactory.create(TransportType.Truck)
    expect(transport.deliver()).toBe("Truck delivery")
  })

  it("should be a ship delivery", () => {
    const transport = TransportFactory.create(TransportType.Ship)
    expect(transport.deliver()).toBe("Ship delivery")
  })

  it("should throw a with invalid transport type", () => {
    const invalidTransportType = "drone"

    expect(() =>
      // @ts-expect-error teste proposital
      TransportFactory.create(invalidTransportType),
    ).toThrow(`Invalid transport type: ${invalidTransportType}`)
  })
})
