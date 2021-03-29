import Head from 'next/head'
import Link from 'next/link'
import { BiAddToQueue } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import TodoList from '../components/TodoList'
import { getTodos, removeTodo, saveTodos } from '../controllers/crud'

export default function Home() {
  const [todos, setTodos] = useState([])
  const [reload, setReload] = useState(false)
  const toggleDataReFetch = () => setReload(reload => !reload)
  const handleRemove = id => {
    removeTodo(id)
    toggleDataReFetch()
  }
  const handleCheck = id => {
    try {
      const todo = getTodos().find(item => item.id === id)
      todo.done = !todo.done
      removeTodo(id)
      saveTodos(todo)
      toggleDataReFetch()
    } catch (e) { throw new Error(e.message) }
  }
  useEffect(() => setTodos(getTodos()), [reload])
  return (
    <>
      <Head>
        <title>Home | Next Todo</title>
      </Head>
      <main className="container">
        <h2 className="d-flex justify-content-between">
          <div>Todos</div>
          <Link href="/add">
            <button className="btn-lg btn-success"><BiAddToQueue /> Add</button>
          </Link>
        </h2><hr />
        <TodoList todos={todos} handleCheck={handleCheck} 
          handleRemove={handleRemove} />
        <hr />
      </main>
    </>
  )
}