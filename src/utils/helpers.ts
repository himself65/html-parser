import { Element } from '../shared'

export function isComponents (ele: Element) {
  return /[A-Z]/.test(ele.name[0])
}
