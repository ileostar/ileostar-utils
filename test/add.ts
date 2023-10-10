import add from '../src/add'

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(6, 4)).toBe(10)
    expect(add(-6, 4)).toBe(-2)
    expect(add(-6, -4)).toBe(-10)
  })
})
