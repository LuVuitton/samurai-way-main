import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Reducers/ProfileReducer";
import {MessengerReducer} from "./Reducers/MessengerReducer";
import {usersReducer} from "./Reducers/UsersReducer";
import {authReducer} from "./Reducers/authReducer";
import {appReducer} from "./Reducers/appReducer";
import Thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";


// при первой загрузке приложения он запускает каждый редьюсер по три раза( почему по три), ИНИЦИАЛИЗИРУЕТ СТЕЙТ
// может в этот момент он упаковывает стейт что вернули редьюсеры в один обьект и присваивает его куда то, в какой-то свой _state
// если явно не прописывать названия свойств в созданом обьекте, то названия обьектов будут такие же как название редьюсеров
//          {
//          MessengerReducer:{то что вернул редьюсер}
//          ProfileReducer:{то что вернул редьюсер}
//          }
// а после возвращает его оттуда уже без повторного запуска редьюсеров

export type RootStateType = ReturnType<typeof rootReducer> // автоматически типизирует то что вернется то что после typeof


const rootReducer = combineReducers({
    profile: profileReducer,
    messenger: MessengerReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

const store = createStore(rootReducer, applyMiddleware(Thunk))

export default store

// @ts-ignore
window.store = store
