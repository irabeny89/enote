import Head from 'next/head'
import Router from 'next/router';
import Add from "../components/Add";
import { addSaveTodo } from '../controllers/crud';
import { useTxtArea } from '../hooks/hook.inputs'

export default function AddPage() {
  const { inputData, onInputChange } = useTxtArea()
  const inputState = { inputData, onInputChange }
  const handleSave = () => 
    (addSaveTodo({ todo: inputData, done: false }), Router.push('/'))
  return (
    <>
      <Head>
        <title>Add | Next Todo</title>
      </Head>
      <main>
        <Add {...inputState} handleSave={handleSave} />
      </main>
    </>
  )
}