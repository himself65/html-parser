import { legalStringRegex } from './shard'

export class Parser {
  static render (str: string) {
    if (!legalStringRegex.test(str)) {
      throw new Error('illegal string: ' + str)
    }
    // todo
  }
}

export default Parser
