import { Todo } from '../models/model.todo'

export const getTodos = () => {
  try {
    const lsData = JSON.parse(localStorage.getItem("todos"))
    return [...(lsData ? lsData : [])]
  } catch (e) { throw new Error(e) }
}

export const save = whatTodo => {
  try {
    const todo = new Todo(whatTodo)
    const todos = JSON.stringify([todo, ...getTodos()])
    localStorage.setItem("todos", todos)
  } catch (e) { throw new Error(e) }
}