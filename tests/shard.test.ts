import { Element } from '../src/shared'

describe('regex unit test', () => {
  const testRegexArray = (array: any[], regex: RegExp) => {
    array.forEach(e => expect(regex.test(e[0])).toEqual(e[1]))
  }

  const execRegexArray = (array: any[], regex: RegExp) => {
    array.forEach(e => expect(regex.exec(e[0])![0]).toEqual(e[1]))
  }

  it('should pass regex simple condition', () => {
    const regex = /(?<=<)[^/][\s\S]+?(?=>)/
    let conditions: any[] = [
      [`<div name="foo"/>`, true],
      [`<div>condition</div>`, true],
      [`<User></User>`, true],
      [`<User/>`, true],
      [`<User hello=""/>`, true]
    ]
    testRegexArray(conditions, regex)

    conditions = [
      ['Foo', true],
      ['foo', false]
    ]

    testRegexArray(conditions, /[A-Z]/)

    conditions = [
      ['<div name="foo" />', ' name="foo" '],
      ['<div name="foo"></div>', ' name="foo"']
    ]
    execRegexArray(conditions, Element.attributeRegex)
  })

  it('should pass regex complex condition', () => {

  })

  it('should pass legalStringRegex test', () => {
    const conditions = [
      ['<div />', true],
      ['<div><div>', true],
      ['<div/ >', false],
      ['<div>', false]
    ]
    testRegexArray(conditions, Element.legalStringRegex)
  })
})
