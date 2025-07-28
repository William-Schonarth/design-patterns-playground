import { Singleton } from "./Singleton"

describe("Singleton", () => {
  it("should return the same instance", () => {
    const instanceA = Singleton.getInstance()
    const instanceB = Singleton.getInstance()

    expect(instanceA.getInstanceId()).toBe(instanceB.getInstanceId())
  })

  it("should return expected message", () => {
    const instance = Singleton.getInstance()

    expect(instance.hello()).toBe("Hello from Singleton!")
  })
})
