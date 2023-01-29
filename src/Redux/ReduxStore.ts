import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Reducers/ProfileReducer";
import {MessengerReducer} from "./Reducers/MessengerReducer";
import {ReduxStoreType} from "../Types";


// при первой загрузке приложения он запускает каждый редьюсер по три раза( почему по три), ИНИЦИАЛИЗИРУЕТ СТЕЙТ
// может в этот момент он упаковывает стейт что вернули редьюсеры в один обьект и присваивает его куда то, в какой-то свой _state
// если явно не прописывать названия свойств в созданом обьекте, то названия обьектов будут такие же как название редьюсеров
//          {
//          MessengerReducer:{то что вернул редьюсер}
//          ProfileReducer:{то что вернул редьюсер}
//          }
// а после возвращает его оттуда уже без повторного запуска редьюсеров

const allReducers = combineReducers({
    profile: ProfileReducer,
    messenger: MessengerReducer,
})

const store: ReduxStoreType = createStore(allReducers)

export default store