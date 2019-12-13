interface IHandleTodo {
  type: string;
  payload: any;
}

// type ActionTypes = IHandleTodo;

interface RootState {
  currentTodo: string;
  all: [];
  counter: number;
}

const initialState: RootState = {
  currentTodo: "",
  all: [],
  counter: 0
};

const inputReducer = (state = initialState, action: IHandleTodo) => {
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
          { id: state.counter++, item: action.payload, complete: false }
        ]
      };
    default:
      return state;
  }
};

export default inputReducer;
