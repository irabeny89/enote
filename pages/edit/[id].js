import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Edit from '../../components/Edit'
import { useTxtArea } from '../../hooks/hook.inputs'
import { getTodos, removeTodo, saveTodos } from '../../controllers/crud'

export default function EditPage() {
  const { inputData, onInputChange, setInputData } = useTxtArea()
  const { query: { id }, push } = useRouter()
  const inputState = { inputData, onInputChange }
  const handleSave = () => {
    try {
      const selectedTodo = getTodos().find(todoItem => todoItem.id === id)
      const newData = {
        todo: inputData, createdAt: new Date().toLocaleString()
      }
      removeTodo(id)
      saveTodos({ ...selectedTodo, ...newData })
      push('/')
    } catch (e) { throw new Error(e.message) }
  }
  useEffect(() => {
    const { todo: selectedTodoProp } = getTodos().find(todoItem => todoItem.id === id)
    if (!selectedTodoProp) console.log('No todo with id: %s found', id)
    setInputData(selectedTodoProp)
  }, [])
  return (
    <>
      <Head><title>Edit/View | Todo Next</title></Head>
      <main>
        <Edit {...inputState} handleSave={handleSave} />
      </main>
    </>
  )
}