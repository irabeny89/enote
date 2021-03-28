import Head from 'next/head'
import Link from 'next/link'
import {BiAddToQueue} from 'react-icons/bi'
import { useEffect, useState } from 'react'
import TodoList from '../src/Components/TodoList'

const Home = () => {
  const [todos, setTodos] = useState([])
  const [reload, setReload] = useState(false)
  const handleCheck = id => {
    try {
      const data = JSON.parse(localStorage.getItem("todos"))
      const todo = data.find(item => item.id === id)
      todo.done = !todo.done
      const filteredData = data.filter(item => item.id !== id)
      const updatedData = todo.done 
        ? [...filteredData, todo] : [todo, ...filteredData]
      localStorage.clear()
      localStorage.setItem("todos", JSON.stringify(updatedData))
      setReload(reload => !reload)
    } catch (e) { throw new Error(e.message) }
  }
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("todos"))
      data ? setTodos(data) : setTodos([])
    } catch (e) { throw new Error(e.message) }
  }, [reload])
  return (
    <>
      <Head>
        <title>Home | Next Todo</title>
      </Head>
      <main className="container">
        <h2 className="d-flex justify-content-between">
          <div>Todos</div>
          <Link href="/add">
            <button className="btn-lg btn-success"><BiAddToQueue /> add</button>
          </Link>
        </h2><hr />
        <TodoList todos={todos} handleCheck={handleCheck} />
      <hr />
      </main>
    </>
  )
}

export default Home