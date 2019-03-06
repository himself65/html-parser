import { Element } from './shared'

export class Parser {
  static render (str: string) {
    if (!Element.legalStringRegex.test(str)) {
      throw new Error('illegal string: ' + str)
    }

  }
}

export default Parser
