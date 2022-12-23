import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { addhanlder, decrementHandler } from "./Redux/actions";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  const plus = () => {
    dispatch(addhanlder());
  };
  const minus = () => {
    dispatch(decrementHandler());
  };
  return (
    <div className="App">
      <button onClick={plus}>+</button>
      <p>{count}</p>
      <button onClick={minus}>-</button>
    </div>
  );
}

