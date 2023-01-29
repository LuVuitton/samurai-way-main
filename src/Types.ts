//неиспользуемые типы стора
import {ChangeEvent, KeyboardEvent} from "react";

// type OldStoreType = {
//     _subscriber: () => void
//     _state: StateType
//     getState: () => StateType
//     subscribe: (observer: () => void) => void
//     dispatch: DispatchType
// }
/////////////////////////////////////////
//State types
export type ReduxStoreType = {                      //понять шо тут происходит, типизируем только свойства к которым обращаемся?
    dispatch: (action:ActionType)=>void
    getState: ()=> StateType
    subscribe: (observer:()=>void) => void

}

type StateType = {
    profile: ProfileStateType
    messenger: MessengerStateType
}
type OneDialogueType = {
    id: string
    userName: string
}
type OneMessageType = {
    id: string
    text: string
}
type OnePostType = {
    id: string
    text: string | undefined //пофиксить андефайнд
    time: string
}
export type MessengerStateType = {
    dialoguesArr: Array<OneDialogueType>
    messagesArr: Array<OneMessageType>
    controlledInputMessengerValue: string
}
export type ProfileStateType = {
    postsArr: Array<OnePostType>
    controlledInputPostValue: string
}

//props types
export type AppPropsType = {
    store: ReduxStoreType,
}
export type ProfilePropsType = {
    store:ReduxStoreType
}
export type PostsListPropsType = {
    arr:Array<OnePostType>
}
export type MessengerPropsType = {
    store:ReduxStoreType
}
export type DialogListPropsType = {
    arr: Array<OneDialogueType>
}
export type MessagesListPropsType = {
    arr: Array<OneMessageType>
}

///////
export type ActionType = {
    type: string
    payload?: any
}
export type DispatchType = (action: ActionType) => void
//AC types
export type addPostACType = () => ActionType
export type addMessageACType = () => ActionType
export type updatePostInputValueACType = (currentValue: string) => ActionType
export type updateMessengerInputValueACType = (currentValue: string) => ActionType



export type ReFormPropsType ={
    onChangeHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    onKeyPressHandler:(e: KeyboardEvent<HTMLInputElement>)=>void
    onclickHandler:()=>void
    inputValue:string

}

export type ContainerType = {
    store:ReduxStoreType
}



