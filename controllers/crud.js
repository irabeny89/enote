import { Todo } from '../models/model.todo'

export const save = whatTodo => {
  try {
    const lsData = JSON.parse(localStorage.getItem("todos"))
    const data = [...(lsData ? lsData : [])]
    const todo = new Todo(whatTodo)
    const todos = JSON.stringify([todo, ...data])
    localStorage.setItem("todos", todos)
  } catch (e) { throw new Error(e) }
}