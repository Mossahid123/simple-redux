import { createStore } from "redux";
import counterReducer from "./Redux/Reducers/counterReducer";

const Store = createStore(counterReducer);

export default Store ;