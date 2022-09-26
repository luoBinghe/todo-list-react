import { ActionKind } from '../enums/Actions';

export type State = {
  task: string;
  tasks: string[];
}

export type Action = {
  type: ActionKind,
  payload: string
}

export const setValue: Action = {
  type: ActionKind.setValue,
  payload: ''
}

export const addTask: Action = {
  type: ActionKind.setValue,
  payload: ''
}

export const initialArg: State = {
  task: '',
  tasks: []
}