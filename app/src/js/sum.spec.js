import {sum} from './sum'

describe('Sum function', () => {
  test('should return sum a few values', () => {
    expect(sum(3, 5)).toBe(8)
  })
})
