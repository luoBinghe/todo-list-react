import { FormEvent } from 'react'
import style from './AddTask.module.css'
import Input from './Input'

export default function AddTask(){
  const handleCreateNewTask = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
  }

    return (
      <form onSubmit={(event) => handleCreateNewTask(event)} className={style.add}>
        <Input />
        <button type='submit'>Criar +</button>
      </form>
    )
}