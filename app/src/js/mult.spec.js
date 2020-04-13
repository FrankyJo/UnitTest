import {mult} from './mult'

describe('Mult function', () => {
  test('should return multiply a few values', () => {
    expect(mult(6, 8)).toBe(48)
  })
})
