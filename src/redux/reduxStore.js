import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarBlock: sidebarReducer
}, );

let store = createStore(reducers);

export default store;