// globalized state 
import reducers from "./index";
import { configureStore } from "redux";

const store = configureStore (
    reducers,
    composeWithDevTools()
);

export default store;