import {diff} from './diff'

describe('Diff function', () => {
  test('should return difference a few values', () => {
    expect(diff(7, 2)).toBe(5)
  })
})
