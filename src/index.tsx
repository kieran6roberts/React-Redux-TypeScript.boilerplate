import configureStore from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./scss/main.scss";

// pass in inital state from server data or local storage etc.
const store = configureStore();

class App extends React.Component {
    render () {
        return (
            <div>Test</div>
        );
    }
}

export default App;

ReactDOM.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </ReduxProvider>,
document.getElementById("root"));
