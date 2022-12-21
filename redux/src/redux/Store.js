import { createStore } from "redux";
import Postreducer from "./Reducex/Postreducer";

const Store = createStore(
    Postreducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default Store