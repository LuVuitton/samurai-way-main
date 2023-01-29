import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Reducers/ProfileReducer";
import {MessengerReducer} from "./Reducers/MessengerReducer";
import {ReduxStoreType} from "../Types";


// получается или не получается что, когда мы вызываем getState(), он запускает все редьюсеры
// и упаковывает в обьект то что они вернули, если явно не прописывать названия свойств, названия обьектов будут такие же как название редьюсеров
// MessengerReducer:{dialoguesArr: Array(3), messagesArr: Array(0), controlledInputMessengerValue: ''}
// ProfileReducer:{postsArr: Array(0), controlledInputPostValue: ''}
// да или нет?)) // п.с. после коносль логов видимо нет
// ЛИБО,
// при первой загрузке приложения он запускает каждый редьюсер по три раза,
// может в этот момент он присваивает стейт куда то, а после возвращает его оттуда уже без повторного запуска редьюсеров

const allReducers = combineReducers({
    profile:ProfileReducer,
    messenger:MessengerReducer,

})

let store: ReduxStoreType = createStore(allReducers)

export default store