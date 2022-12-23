import { DECREMENT, INCREMENT } from "./actionType";
export const addhanlder = () => {
  return {
    type: INCREMENT
  };
};
export const decrementHandler = () => {
  return {
    type: DECREMENT
  };
};