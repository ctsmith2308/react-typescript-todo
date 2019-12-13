interface IHandleTodo {
  type: string;
  payload: any;
}

type ActionTypes = IHandleTodo;

const initialState: any = {
  currentTodo: "",
  all: [],
  counter: 0
};

const inputReducer = (state = initialState, action: ActionTypes) => {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case "HANDLE_TODO":
      return {
        ...state,
        currentTodo: action.payload
      };
    case "ADD_TODO":
      return {
        ...state,
        currentTodo: "",
        all: [
          ...state.all,
          { id: state.counter++, todo: action.payload, completed: false }
        ]
      };
    default:
      return state;
  }
};

export default inputReducer;
