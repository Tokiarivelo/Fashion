import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";

const TodoList = ({ todos } : any) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo : any, index : number) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = (state : any) => {
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && state.todos.allIds.length
      ? allIds.map((id : number) => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
};

// export default TodoList;
export default connect(mapStateToProps)(TodoList);