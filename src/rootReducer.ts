interface IHandleTodo {
  type: string;
  payload: any;
}

interface ITodo {
  id: number;
  item: string;
  complete: boolean;
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
    case "COMPLETE_TODO":
      return {
        ...state,
        all: state.all.map((item: ITodo) =>
          item.id === action.payload ? { ...item, complete: true } : { ...item }
        )
      };
    default:
      return state;
  }
};

export default inputReducer;
