import React from 'react';
import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App store={store}/>
                    {/*// bind - связываем метод с его владельцем, чтобы всегда был корректный контекст вызова от имени store. Теперь для этого метода дальше this всегда = store*/}
                </Provider>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals()   WAS HERE, it can be useful