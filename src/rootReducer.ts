interface HandleInputAction {
  type: string;
  payload: string;
}

export interface ITodo {
  id: number;
  item: string;
  complete: boolean;
}

export interface IRootState {
  currentTodo: string;
  all: ITodo[];
  counter: number;
}

const initialState: IRootState = {
  currentTodo: "",
  all: [],
  counter: 0
};

const inputReducer = (state = initialState, action: HandleInputAction) => {
  switch (action.type) {
    case "HANDLE_TODO":
      return {
        ...state,
        currentTodo: action.payload
      };
    // case "ADD_TODO":
    // return {
    //   ...state,
    //   currentTodo: "",
    //   all: [
    //     ...state.all,
    //     { id: state.counter++, item: action.payload, complete: false }
    //   ]
    // };
    // case "COMPLETE_TODO":
    //   return {
    //     ...state,
    //     all: state.all.map((item: ITodo) =>
    //       item.id === action.payload ? { ...item, complete: true } : { ...item }
    //     )
    //   };
    // case "RE_ADD_TODO":
    //   return {
    //     ...state,
    //     all: state.all.map((item: ITodo) =>
    //       item.id === action.payload
    //         ? { ...item, complete: false }
    //         : { ...item }
    //     )
    //   };
    default:
      return state;
  }
};

export default inputReducer;
