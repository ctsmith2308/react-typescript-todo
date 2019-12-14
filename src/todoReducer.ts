import { ITodo, initialState } from "./rootReducer";

export interface IManageTodo {
  type: string;
  payload: number;
}

type ManageTodoActionTypes = IManageTodo;
const inputReducer = (state = initialState, action: ManageTodoActionTypes) => {
  switch (action.type) {
    case "TOGGLE_TODO_STATUS":
      return {
        ...state,
        all: state.all.map((item: ITodo) =>
          item.id === action.payload
            ? { ...item, complete: !item.complete }
            : { ...item }
        )
      };
    default:
      return state;
  }
};

export default inputReducer;
