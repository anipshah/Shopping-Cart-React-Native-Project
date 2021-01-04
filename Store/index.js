import { createStore, applyMiddleware } from "redux";
import CartReducer from "../reducer/CartReducer";
import thunk from "redux-thunk";
export default Store = createStore(CartReducer, applyMiddleware(thunk));
