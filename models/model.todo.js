import { randomBytes } from 'crypto'

export class Todo {
  id = randomBytes(8).toString('hex')
  createdAt = new Date().toLocaleString()
  constructor(todoObj) {
    this.todo = todoObj.todo
    this.done = Todo.validate(todoObj.done)
  }
  static validate(prop) {
    const isBool = typeof prop === 'boolean' ? true : false
    if (isBool) {
      return prop
    } else throw new Error("'done' property should be a Boolean")
  }  
}