import { useState } from 'react'

export const useTxtArea = () => {
  const [inputData, setInputData] = useState("")
  const onInputChange = ({ target: { value } }) => setInputData(value)
  return { inputData, onInputChange, setInputData }
}