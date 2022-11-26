import store from "./store";
import { Provider } from "react-redux";
import App from "./App"
import React from "react";
import { render } from "react-dom";
import { loadUsersActionCreator } from "./actions/actions";

render (
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

