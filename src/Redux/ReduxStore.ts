import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Reducers/ProfileReducer";
import {MessengerReducer} from "./Reducers/MessengerReducer";
import {ReduxStoreType} from "../Types";


const allReducers = combineReducers({
    profile:ProfileReducer,
    messenger:MessengerReducer,

})

let store:ReduxStoreType = createStore(allReducers)

export default store