import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import reducerContent from "./Store/Reducers/reducerContent";
import reducerCategory from "./Store/Reducers/reducerCategory";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import reducerPublications from "./Store/Reducers/reducerPublications";

const rootReducer = combineReducers({reducerContent, reducerCategory, reducerPublications});
const store = createStore(rootReducer, applyMiddleware(thunk));


const app = (
    <Provider store={store}>
        <BrowserRouter>
           <App/>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
