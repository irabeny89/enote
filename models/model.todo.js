import { randomBytes } from 'crypto'

export class Todo {
  id = randomBytes(8).toString('hex')
  createdAt = new Date().toLocaleString()
  constructor(todoObj) {
    this.todo = Todo.validateTodo(todoObj.todo)
    this.done = Todo.validateDone(todoObj.done)
  }
  static validateTodo(prop) {
    try {
      if (typeof prop === 'string' && prop !== '') return prop
      else throw new Error("Invalid entry")
    } catch (e) { throw new Error(e.message) }
  }  
  static validateDone(prop) {
    try {
      if (typeof prop === 'boolean') return prop
      else throw new Error("Invalid entry")
    } catch (e) { throw new Error(e.message) }
  }
}