import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import MessageComponent from "./components/MessageComponent";
import store from "./store";
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MessageComponent />
            </div>
        </Provider>
    );
}

export default App;
