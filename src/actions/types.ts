import {FetchTodosAction, ClearTodosAction} from './todos'

export enum ActionTypes {
  // fetchTodos = "FETCH_TODOS",
  fetchTodos,
  clearTodos
}

export type Action = FetchTodosAction | ClearTodosAction