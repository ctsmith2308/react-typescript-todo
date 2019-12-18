import React, { useState } from "react";

import { TodoListStateProps, ToggleTodoDispatchProps, Todo } from "./types";

type TodoProps = Omit<Todo, "complete"> & ToggleTodoDispatchProps;

const SingleTodo = ({
  id,
  item,
  toggleTodoStatus,
  deleteTodo,
  updateTodo
}: TodoProps) => {
  const [inputDisabled, toggleAllowEditable] = useState(true);
  const [updatedInput, setUpdatedInput] = useState("");

  return (
    <li>
      <button onClick={() => toggleTodoStatus(id)}>Toggle Status</button>
      <div onDoubleClick={() => toggleAllowEditable(!inputDisabled)}>
        {inputDisabled ? (
          <div>{item}</div>
        ) : (
          <form
            onSubmit={e => {
              e.preventDefault();
              updateTodo(updatedInput, id);
              toggleAllowEditable(!inputDisabled);
            }}
          >
            <input
              type="text"
              value={inputDisabled ? item : updatedInput}
              onChange={e => setUpdatedInput(e.target.value)}
              onBlur={() => toggleAllowEditable(!inputDisabled)}
              autoFocus
            />
          </form>
        )}
      </div>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};

type TodoListProps = TodoListStateProps & ToggleTodoDispatchProps;

const TodoList = ({
  todos,
  toggleTodoStatus,
  deleteTodo,
  updateTodo
}: TodoListProps) => {
  return (
    <ul className="todo-list-container">
      {todos.map((todo: Todo) => {
        const { id, item } = todo;
        return (
          <SingleTodo
            key={id}
            id={id}
            item={item}
            toggleTodoStatus={toggleTodoStatus}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
