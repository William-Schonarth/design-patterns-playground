import { NewPaymentGateway, OldPaymentGateway, OldPaymentGatewayAdapter } from "./Adapter"

describe('Adapter', () => {
  it('should pay using new gateway', () => {
    const payment = new NewPaymentGateway()

    expect(payment.pay(100)).toBe('Processed $100 via new gateway')
  })

  it('should pay using legacy gateway via adapter', () => {
    const legacyGateway = new OldPaymentGateway()
    const adaptedGateway = new OldPaymentGatewayAdapter(legacyGateway)

    expect(adaptedGateway.pay(200)).toBe('Processed $200 via legacy gateway')
  })
})