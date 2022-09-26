import React, { createContext, useReducer, FormEvent, useContext, ReactNode } from "react"
import { ActionKind } from '../enums/Actions';
import { Action, State, initialArg } from '../models/ActionModel'

type ValueProps = {
  state: Action,
  dispatch: () => void;
  handleCreateNewTask: () => void
}

const TaskContext = createContext<any>({})

type TaskHandlerProps = {
  children: ReactNode
}

export const TasksHandler = ({children}: TaskHandlerProps) => {
  const [state, dispatch] = useReducer(reducer, initialArg)

  function reducer(state: State, action: Action): State {
    switch(action.type){
      case ActionKind.setValue:
        return { ...state, task: action.payload }
      case ActionKind.addTask: 
        return {...state, tasks: [...state.tasks, action.payload]}
    }
  }

  const handleCreateNewTask = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    dispatch({type: ActionKind.addTask, payload: state.task})
  }

  return (
    <TaskContext.Provider value={{state, dispatch, handleCreateNewTask}}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasksContext = () => {
  const context = useContext(TaskContext);
  return context
}

