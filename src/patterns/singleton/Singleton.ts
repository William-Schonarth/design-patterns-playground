// ref: https://refactoring.guru/pt-br/design-patterns/singleton

export class Singleton {
  private static instance: Singleton
  private readonly instanceId: string

  private constructor() {
    this.instanceId = crypto.randomUUID()
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }

  getInstanceId() {
    return this.instanceId
  }

  hello() {
    return 'Hello from Singleton!'
  }
}
