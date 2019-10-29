import React from "react";
import { connect } from "react-redux";
import Todo from '../redux/Todo'
import cx from "classnames";
import { toggleTodo } from "../redux/actions";


export const Todo = (todo: Todo) =>(
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span
            className={cx(
                "todo-item__text",
                todo && todo.completed && "todo-item__text--completed"
            )}
        >
            {todo.content}
        </span>
    </li>
)
