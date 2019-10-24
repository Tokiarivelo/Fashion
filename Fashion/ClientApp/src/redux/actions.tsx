// redux/actions.js
import { ADD_TODO } from './actionTypes'

let nextTodoId = 0
export const addTodo = (content : number) => ({
  type: { type : 'ADD_TODO'} as ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
})