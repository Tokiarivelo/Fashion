import { ActionTypes } from './actionTypes'
import { Action, Reducer } from 'redux';
import Todo from '../components/Todo';




export interface AddTodoAction {
  type: ActionTypes.ADD_TODO, payload : {todo : Todo}
}
export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO, payload: { todoId: number }
}
let nextTodoId = 0;

export function addTodo (content : string){
  return {
    type: ActionTypes.ADD_TODO,
    payload :{
    completed: false,
      id: ++nextTodoId,
      content
    }
  }
};

export function toggleTodo  (id : number){
  return{
    type: ActionTypes.TOGGLE_TODO,
    payload: { id }
  }
};

export type Action = AddTodoAction | ToggleTodoAction;