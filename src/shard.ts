export interface Element {
  name: string
  attr: {
    class: string,
    style: object,
    listeners: object
  }
}

export namespace Element {
  export const legalStringRegex = /<.+?>?[\s\S]+(<.+>|\/>)/

  export const innerContentRegex = /(?<=(<.+>))[\s\S]+?(?=(<.+>))/

  // <div name="foo" /> --> 'div'
  export const nameRegex = /(?<=<)[\S]+/

  // <div name="foo" class="att" /> --> ' name="foo" class="att" '
  export const attributeRegex = /(?<=<[\s\S]+(?=\s))[\s\S]+?(?=\/?>)/

  export const isScopedElement = /(?<=<).+(?=\/>)/
}
