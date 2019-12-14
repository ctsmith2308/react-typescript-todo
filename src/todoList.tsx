import React from "react";

import { TodoListStateProps, ToggleTodoDispatchProps, Todo } from "./types";

type TodoProps = Todo & ToggleTodoDispatchProps;

const SingleTodo = ({
  id,
  complete,
  item,
  toggleCompletedStatus
}: TodoProps) => {
  return (
    <li key={id}>
      <button onClick={() => toggleCompletedStatus(id)}>
        {item} is complete = {String(complete)}
      </button>
    </li>
  );
};

type TodoListProps = TodoListStateProps & ToggleTodoDispatchProps;

const TodoList = ({ all, toggleCompletedStatus }: TodoListProps) => {
  return (
    <ul className="todo-list-container">
      {all.map((todo: Todo) => {
        const { id, item, complete } = todo;
        return (
          <SingleTodo
            key={id}
            id={id}
            item={item}
            complete={complete}
            toggleCompletedStatus={toggleCompletedStatus}
            // deleteTodo
            // editTodo
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
