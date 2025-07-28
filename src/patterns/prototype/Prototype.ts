interface Document {
  clone(): Document
  print(): string
}

export class Proposal implements Document {
  constructor(
    public clientName: string,
    public value: number,
    public content: string,
    public version: number = 1
  ) {}

  clone(): Proposal {
    return new Proposal(
      this.clientName,
      this.value,
      this.content,
      this.version + 1
    )
  }

  print(): string {
    return `Proposal v${this.version} for ${this.clientName}: $${this.value}\n${this.content}`
  }
}