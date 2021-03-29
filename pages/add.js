import Head from 'next/head'
import Add from "../components/Add";
import { useTxtArea } from '../hooks/hook.inputs'
import { useSave } from '../hooks/hook.local-storage'

export default function AddPage() {
  return (
    <>
      <Head>
        <title>Add | Next Todo</title>
      </Head>
      <main>
        <Add {...useTxtArea()} save={useSave} />
      </main>
    </>
  )
}