import React from "react";
import {State} from '../redux/reducers/todos'
import { connect } from "react-redux";
import {Todo} from './Todo'

const TodoList = (state : State) => (
    <ul className="todo-list">
        {
            state.todos && state.todos.length ?
            state.todos.map((todo, index) =>{
                return <Todo key={`todo-${todo.id}`} todo={todo}/>
            }) :
            "No todo yet!"
        }
    </ul>
)