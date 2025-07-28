// ref: https://refactoring.guru/pt-br/design-patterns/adapter

interface PaymentProcessor {
  pay(amount: number): string
}

export class NewPaymentGateway implements PaymentProcessor {
  pay(amount: number): string {
    return `Processed $${amount} via new gateway`
  }
}

export class OldPaymentGateway {
  makePayment(total: number): string {
    return `Processed $${total} via legacy gateway`
  }
}

export class OldPaymentGatewayAdapter implements PaymentProcessor {
  constructor(private legacy: OldPaymentGateway) {}

  pay(amount: number): string {
    return this.legacy.makePayment(amount)
  }
}