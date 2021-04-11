import axios from "axios";
import {Dispatch} from  "redux";
import {ActionType} from './types'

interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos";
export const fetch = () => {
  // dispatch comes from redux automatically
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch({
      type: ActionType.fetchTodos,
      patload: response.data,
    });
  };
};
