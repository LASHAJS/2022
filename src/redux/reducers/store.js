import {applyMiddleware, combineReducers, createStore} from "redux";
import {contactReducer} from "./contactReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {authReducer} from "./AuthReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    contactReducer: contactReducer,
    authReducer: authReducer,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
