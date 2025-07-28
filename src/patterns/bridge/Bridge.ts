// ref:

// Implementation
interface Device {
  isEnabled(): boolean

  enable(): void

  disable(): void

  getVolume(): number

  setVolume(value: number): void

  getName(): string
}

export class Tv implements Device {
  private readonly name = "TV"
  private enabled = false
  private volume = 10

  isEnabled(): boolean {
    return this.enabled
  }

  enable(): void {
    this.enabled = true
  }

  disable(): void {
    this.enabled = false
  }

  getVolume(): number {
    return this.volume
  }

  setVolume(value: number): void {
    this.volume = Math.max(0, Math.min(100, value))
  }

  getName(): string {
    return this.name
  }
}

export class Radio implements Device {
  private readonly name = "Radio"
  private enabled = false
  private volume = 30

  isEnabled(): boolean {
    return this.enabled
  }

  enable(): void {
    this.enabled = true
  }

  disable(): void {
    this.enabled = false
  }

  getVolume(): number {
    return this.volume
  }

  setVolume(value: number): void {
    this.volume = Math.max(0, Math.min(100, value))
  }

  getName(): string {
    return this.name
  }
}

// Abstraction
export class RemoteControl {
  constructor(protected device: Device) {}

  togglePower(): string {
    if (this.device.isEnabled()) {
      this.device.disable()
      return `${this.device.getName()} turned OFF`
    } else {
      this.device.enable()
      return `${this.device.getName()} turned ON`
    }
  }

  volumeDown(): string {
    const newVolume = this.device.getVolume() - 10
    this.device.setVolume(newVolume)
    return `${this.device.getName()} volume: ${this.device.getVolume()}`
  }

  volumeUp(): string {
    const newVolume = this.device.getVolume() + 10
    this.device.setVolume(newVolume)
    return `${this.device.getName()} volume: ${this.device.getVolume()}`
  }
}

export class AdvancedRemoteControl extends RemoteControl {
  mute(): string {
    this.device.setVolume(0)
    return `${this.device.getName()} muted`
  }
}