import { useTasksContext } from '../contexts/TaskContext'
import style from './AddTask.module.css'
import Input from './Input'
import { ActionKind } from '../enums/Actions';


export default function AddTask(){
  const { state, dispatch, handleCreateNewTask } = useTasksContext()
  console.log(state)
  return (
    <form onSubmit={(event) => handleCreateNewTask(event)} className={style.add}>
      <Input onChange={(event: any) => dispatch({type: ActionKind.setValue, payload: event.target.value})} value={state.task}/>
      <button type='submit'>Criar +</button>
    </form>
  )
}