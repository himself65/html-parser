import { Element } from '../shard'

export function isComponents (ele: Element) {
  return /[A-Z]/.test(ele.name[0])
}
