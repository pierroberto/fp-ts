import { isSome, none } from '../src/Option'
import * as _ from '../src/Random'
import * as U from './util'

describe('Random', () => {
  it('random', () => {
    const n = _.random()
    U.deepStrictEqual(typeof n, 'number')
  })

  it('randomInt', () => {
    const n = _.randomInt(0, 10)()
    U.deepStrictEqual(typeof n, 'number')
    U.deepStrictEqual(n % 1 === 0, true)
    U.deepStrictEqual(n >= 0, true)
    U.deepStrictEqual(n <= 10, true)
  })

  it('randomRange', () => {
    for (let i = 0; i < 10; i++) {
      const n = _.randomRange(0, 10)()
      U.deepStrictEqual(typeof n, 'number')
      U.deepStrictEqual(n >= 0, true)
      U.deepStrictEqual(n < 10, true)
    }
  })

  it('randomBool', () => {
    const b = _.randomBool()
    U.deepStrictEqual(typeof b, 'boolean')
  })

  it('randomElem', () => {
    const e = _.randomElem([1, 2, 3])()
    U.deepStrictEqual(e >= 1 && e <= 3, true)
  })

  it('randomArrayElem', () => {
    const eOption = _.randomArrayElem([1, 2, 3])()
    U.deepStrictEqual(_.randomArrayElem([])(), none)
    U.deepStrictEqual(isSome(eOption) && eOption.value >= 1 && eOption.value <= 3, true)
  })
})
