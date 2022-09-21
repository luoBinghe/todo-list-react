import { FormEvent, useReducer, ChangeEvent } from 'react'
import { ActionKind } from '../enums/Actions';
import style from './AddTask.module.css'
import Input from './Input'

type State = {
  task: string;
}

type Action = {
  type: ActionKind,
  payload: string
}

export const setValue: Action = {
  type: ActionKind.setValue,
  payload: ''
}

const initialArg: State = { task: '' }


export default function AddTask(){
  const [state, dispatch] = useReducer(reducer, initialArg)

  function reducer(state: State, action: Action): State {
    switch(action.type){
      case ActionKind.setValue:
        return { ...state, task: action.payload }
    }
  }

  const handleCreateNewTask = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    
  }

  return (
    <form onSubmit={(event) => handleCreateNewTask(event)} className={style.add}>
      <Input onChange={(event: any) => dispatch({type: ActionKind.setValue, payload: event.target.value})} value={state.task}/>
      <button type='submit'>Criar +</button>
    </form>
  )
}