import { Todo } from '../models/model.todo'

const sortByDoneSave = todoList => {
  try {
    const doneTodos = todoList.filter(todoItem => todoItem.done === true)
    const undoneTodos = todoList.filter(todoItem => todoItem.done === false)
    const sortedTodos = [...undoneTodos, ...doneTodos]
    saveTodoToLocalStorage(sortedTodos)
  } catch (e) { throw new Error(e.message) }
}
const saveTodoToLocalStorage = data => localStorage.setItem("todos", JSON.stringify(data))

export const getTodos = () => {
  try {
    const lsData = JSON.parse(localStorage.getItem("todos"))
    return [...(lsData ? lsData : [])]
  } catch (e) { throw new Error(e) }
}
export const saveTodos = (...todoItems) => {
  try {
    todoItems.length > 1 
      ? sortByDoneSave(todoItems) 
      : saveTodoToLocalStorage([...todoItems, ...getTodos()])
  } catch (e) { throw new Error(e) }
}
export const removeTodo = id => {
  try {
    const filteredList = getTodos().filter(item => item.id !== id)
    localStorage.removeItem("todos")
    saveTodos(...filteredList)
  } catch (e) { throw new Error(e.message) }
}
export const addSaveTodo = whatTodo => {
  try {
    const todo = new Todo(whatTodo)
    saveTodos(todo)
  } catch (e) { throw new Error(e) }
}