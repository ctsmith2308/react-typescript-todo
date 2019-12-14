import React from "react";

import { TodoListStateProps, ToggleTodoDispatchProps, Todo } from "./types";

type TodoProps = Todo & ToggleTodoDispatchProps;

const SingleTodo = ({
  id,
  complete,
  item,
  toggleTodoStatus,
  deleteTodo
}: TodoProps) => {
  return (
    <li key={id}>
      <button onClick={() => toggleTodoStatus(id)}>
        {item} is complete = {String(complete)}
      </button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};

type TodoListProps = TodoListStateProps & ToggleTodoDispatchProps;

const TodoList = ({ todos, toggleTodoStatus, deleteTodo }: TodoListProps) => {
  return (
    <ul className="todo-list-container">
      {todos.map((todo: Todo) => {
        const { id, item, complete } = todo;
        return (
          <SingleTodo
            key={id}
            id={id}
            item={item}
            complete={complete}
            toggleTodoStatus={toggleTodoStatus}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
