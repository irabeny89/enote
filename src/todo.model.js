import { randomBytes } from 'crypto'

export class Todo {
  id = randomBytes(8).toString('hex')
  createdAt = new Date().toLocaleString()
  constructor(todo, done) {
    this.todo = todo
    this.done = Todo.validate(done)
  }
  static validate(prop) {
    const isBool = typeof prop === 'boolean' ? true : false
    if (isBool) {
      return prop
    } else throw new Error("'done' property should be a Boolean")
  }  
}