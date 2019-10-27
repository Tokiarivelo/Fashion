// redux/actions.js
import { ADD_TODO, TOGGLE_TODO } from './actionTypes'

let nextTodoId = 0
export const addTodo = {addTodo : (content : string) => ({
  type: { type : 'ADD_TODO'} as ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
})};

export const toggleTodo = (id : number) => ({
  type: { type : 'TOGGLE_TODO'} as TOGGLE_TODO,
  payload: { id }
});