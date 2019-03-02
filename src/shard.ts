export interface Element {
  name: 'div' | 'span' | 'html' | 'body'
    | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' // todo
  attr: {
    class: string,
    style: object,
    listeners: []
  }
}

export const legalStringRegex = /<.+>?[\s\S](<.+>|\/>)/
