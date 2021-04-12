import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[]
}

export interface ClearTodosAction {
  type: ActionTypes.clearTodos
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo
  payload: number
}

const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = () => {
  // dispatch comes from redux automatically
  return async (dispatch: Dispatch) => {
    // Dispatchはreduxから提供されてるinterface
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const clearTodos = () => {
  return (dispatch: Dispatch) => {
    dispatch<ClearTodosAction>({
      type: ActionTypes.clearTodos
    })
  }
}

export const deleteTodo = (index: number, todoArr: Array<object>) => {
  return (dispatch: Dispatch) => {
    dispatch<DeleteTodoAction>({
      type: ActionTypes.deleteTodo,
      payload: index
    })
  }
}