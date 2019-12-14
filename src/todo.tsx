import React from "react";

import { ITodo } from "./rootReducer";
import { IStateProps, IDispatchProps } from "./todoListContainer";

type TodoProps = ITodo & IDispatchProps;
export const Todo = ({
  id,
  complete,
  item,
  toggleCompletedStatus
}: TodoProps) => {
  return (
    <li key={id}>
      <button onClick={() => console.log("hey")}>
        {item} is complete = {String(complete)}
      </button>
    </li>
  );
};

type ListProps = IStateProps & IDispatchProps;
const TodoList = ({ all, toggleCompletedStatus }: ListProps) => {
  return (
    <ul className="todo-list-container">
      {all.map((todo: ITodo) => {
        const { id, item, complete } = todo;
        return (
          <Todo
            key={id}
            id={id}
            item={item}
            complete={complete}
            toggleCompletedStatus={toggleCompletedStatus}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
