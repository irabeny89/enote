import { Todo } from '../../models/model.todo'

export const save = todoData => {
  try {
    const lsData = JSON.parse(localStorage.getItem("todos"))
    const data = [...(lsData ? lsData : [])]
    const todo = new Todo(todoData, false)
    const todos = JSON.stringify([todo, ...data])
    localStorage.setItem("todos", todos)
  } catch (e) { throw new Error(e) }
}