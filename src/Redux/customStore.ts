export {}

// import {v1} from "uuid";
// import {
//     addMessageACType,
//     addPostACType,
//     OldStoreType,
//     updateMessengerInputValueACType,
//     updatePostInputValueACType
// } from "../Types";
// import {ProfileReducer} from "./Reducers/ProfileReducer";
// import {MessengerReducer} from "./Reducers/MessengerReducer";
//
//
//
//
// export const oldStore: OldStoreType = {
//     _subscriber() {
//         console.log('шо там') //сюда можем передать любую функцию и она будет вызываться каждый раз когда с обьектом происходят изменение,
//     },        //если точнее, мы сами прописали эту логику, в каждом из методов мы прописываем вызов субскрайбера(метод которому мы присвоили свою функцию)
//     _state: {
//         profile: {
//             postsArr: [
//                 {id: v1(), text: 'post for feed', time: '00:01'},
//                 {id: v1(), text: 'first post for feed', time: '00:02'},
//                 {id: v1(), text: 'second post for feed', time: '00:03'},
//             ],
//             controlledInputPostValue: '',
//
//         },
//         messenger: {
//             dialoguesArr: [
//                 {id: v1(), userName: 'Name'},
//                 {id: v1(), userName: 'FirstName'},
//                 {id: v1(), userName: 'SecondName'},
//             ],
//             messagesArr: [
//                 {id: v1(), text: 'message for dialogue'},
//                 {id: v1(), text: 'first message foe dialogue'},
//                 {id: v1(), text: 'second message foe dialogue'},
//             ],
//             controlledInputMessengerValue: '',
//         }
//     },
//
//     subscribe(observer) {
//         this._subscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//
//         ProfileReducer(this._state.profile, action)
//         MessengerReducer(this._state.messenger, action)
//         this._subscriber()
//
//     }
// }
//
//
//
//
//
//
//
//
