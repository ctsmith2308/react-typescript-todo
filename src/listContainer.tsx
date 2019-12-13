import React from "react";
import { connect } from "react-redux";

interface ITodo {
  id: number;
  item: string;
  complete: boolean;
}

interface IStateProps {
  all: ITodo[];
}

// This is redundant
interface ICompleteTodo {
  type: string;
  payload: any;
}

interface IDispatchProps {
  complete_todo: (id: number) => ICompleteTodo; // make this generic function
  re_add_todo: (id: number) => ICompleteTodo; // should be a different type - more generic maybe?
}

type ListProps = IStateProps & IDispatchProps;

interface IRootState {
  all: ITodo[];
}

const mapState = (state: IRootState) => {
  return {
    all: state.all
  };
};

// extract this anonymous to other function and re-use
const mapDispatch = {
  complete_todo: (id: number) => ({
    type: "COMPLETE_TODO",
    payload: id
  }),
  re_add_todo: (id: number) => ({
    type: "RE_ADD_TODO",
    payload: id
  })
};

type TodoProps = ITodo & IDispatchProps;

const Todo = ({
  id,
  complete,
  item,
  re_add_todo,
  complete_todo
}: TodoProps) => {
  return (
    <li key={id}>
      <button onClick={() => (complete ? re_add_todo(id) : complete_todo(id))}>
        {item} is complete = {String(complete)}
      </button>
    </li>
  );
};

const TodoListContainer = ({ all, complete_todo, re_add_todo }: ListProps) => {
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
            complete_todo={complete_todo}
            re_add_todo={re_add_todo}
          />
        );
      })}
    </ul>
  );
};

const connector = connect(mapState, mapDispatch);

export default connector(TodoListContainer);
