import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {contactReducer} from './redux/reducers/contactReducer';
import {authReducer} from './redux/reducers/AuthReducer/AuthReducer';


const reducers = combineReducers({
  contactReducer : contactReducer,
  authReducer : authReducer
})
const store = createStore(reducers, composeWithDevTools());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
