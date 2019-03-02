import { legalStringRegex } from '../src/shard'

describe('regex unit test', () => {
  const testRegexArray = (array: any[], regex: RegExp) => {
    array.forEach(e => expect(regex.test(e[0])).toBe(e[1]))
  }

  it('should pass regex.test simple condition', () => {
    const regex = /(?<=<)[^/][\s\S]+?(?=>)/
    const conditions = [
      [`<div name="shit"/>`, true],
      [`<div>condition</div>`, true],
      [`<User></User>`, true],
      [`<User/>`, true],
      [`<User hello=""/>`, true]
    ]
    testRegexArray(conditions, regex)
  })

  it('should pass regex.test complex condition', () => {

  })

  it('should pass legalStringRegex test', () => {
    const conditions = [
      ['<div />', true],
      ['<div><div>', true],
      ['<div/ >', false],
      ['<div>', false]
    ]
    testRegexArray(conditions, legalStringRegex)
  })
})
