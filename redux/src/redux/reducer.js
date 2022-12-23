import { INCREMENT, DECREMENT } from "./actionType";

const initstate = {
  counter: 6
};

export const counterReducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default:
      return state;
  }
}
