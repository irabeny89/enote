import Head from 'next/head'
import AddTodo from "../src/Components/AddTodo";
import { useTxtArea } from '../src/hooks/hook.inputs'
import { useSave } from '../src/hooks/hook.local-storage'

const AddPage = () => 
  <> 
    <Head>
      <title>Add | Next Todo</title>
    </Head>
    <main>
      <AddTodo {...useTxtArea()} save={useSave()} />
    </main>
  </>

export default AddPage;