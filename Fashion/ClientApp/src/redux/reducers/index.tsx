import * as fromTodo from './todos';
import { combineReducers } from 'redux';

export interface State{
    todos : fromTodo.State,
}

export const initialState : State = {
    todos : fromTodo.initialState,
}

export const reducer = combineReducers<State>({
    todos : fromTodo.reducer
})