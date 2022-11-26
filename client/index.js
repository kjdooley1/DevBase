import store from "./store";
import { Provider } from "react-redux";
import App from "./App"

render (
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)