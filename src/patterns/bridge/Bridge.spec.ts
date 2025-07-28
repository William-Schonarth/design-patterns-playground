import { AdvancedRemoteControl, Radio, RemoteControl, Tv } from "./Bridge"

describe('Bridge Pattern', () => {
  it('should control TV', () => {
    const remoteControl = new RemoteControl(new Tv())

    expect(remoteControl.togglePower()).toBe('TV turned ON')
    expect(remoteControl.volumeUp()).toBe('TV volume: 20')
    expect(remoteControl.volumeDown()).toBe('TV volume: 10')
  })

  it('should control Radio with advanced remote', () => {
    const advancedRemoteControl = new AdvancedRemoteControl(new Radio())

    expect(advancedRemoteControl.togglePower()).toBe('Radio turned ON')
    expect(advancedRemoteControl.mute()).toBe('Radio muted')
  })
})