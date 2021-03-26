import Router from 'next/router'
import Head from 'next/head'
import { useState } from "react";
import { Todo } from '../src/todo.model';
import AddTodo from "../src/Components/AddTodo";

const AddPage = () => {
  const [inputData, setInputData] = useState("")
  const onInputChange = ({ target: { value } }) => setInputData(value)
  const handleSave = () => {
    try {
      const lsData = JSON.parse(localStorage.getItem("todos"))
      const data = [...(lsData ? lsData : [])]
      const todo = new Todo(inputData, false)
      const todos = JSON.stringify([todo, ...data])
      localStorage.setItem("todos", todos)
      Router.push('/')
    } catch (e) { throw new Error(e.message) }
  }
  const addInputState = { inputData, onInputChange, handleSave }
  return (
    <> 
      <Head>
        <title>Add | Next Todo</title>
      </Head>
      <main>
        <AddTodo {...addInputState} />
      </main>
    </>
  )
}

export default AddPage;