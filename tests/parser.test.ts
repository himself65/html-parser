import { resolve } from 'path'
import { readFileSync } from 'fs'

const str = readFileSync(resolve(__dirname, '__mock__', 'template.html')).toString()

describe('Parser Test', () => {
  it('should pass base test', () => {
    expect(str).toBeDefined()
    console.log(str)
  })
})
