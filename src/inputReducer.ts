export interface HandleUserInput {
  type: string;
  userInput: string;
}

export interface ITodo {
  id: number;
  item: string;
  complete: boolean;
}

export interface IInputRootState {
  userInput: string;
  all: ITodo[];
  counter: number;
}

const initialState: IInputRootState = {
  userInput: "",
  all: [],
  counter: 0
};

type UserInputActionType = HandleUserInput;

const inputReducer = (state = initialState, action: UserInputActionType) => {
  switch (action.type) {
    case "INPUT_CHANGED":
      return {
        ...state,
        userInput: action.userInput
      };
    case "ADD_TODO":
      return {
        ...state,
        userInput: "",
        all: [
          ...state.all,
          { id: state.counter++, item: action.userInput, complete: false }
        ]
      };
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
