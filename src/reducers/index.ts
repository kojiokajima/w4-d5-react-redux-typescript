import {bindActionCreators, combineReducers} from 'redux'
// import {ActionTypes} from '../actions/types'
import {todosReducer} from './todos'

export const reducers = combineReducers({
  todos: todosReducer
})