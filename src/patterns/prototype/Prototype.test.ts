import {Proposal} from "./Prototype";

describe('Prototype', () => {
  it('should clone a proposal and increment version', () => {
    const original = new Proposal('Acme Inc.', 10000, 'Service Agreement')
    const clone = original.clone()

    expect(clone).not.toBe(original)
    expect(clone.clientName).toBe(original.clientName)
    expect(clone.version).toBe(original.version + 1)
    expect(clone.print()).toContain('v2')
  })

  it('should allow modification of the clone independently', () => {
    const original = new Proposal('Beta Corp.', 20000, 'Project Plan')
    const clone = original.clone()

    clone.clientName = 'Alpha Corp.'
    clone.value = 25000

    expect(original.clientName).toBe('Beta Corp.')
    expect(clone.clientName).toBe('Alpha Corp.')
  })
})