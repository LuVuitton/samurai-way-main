import {ChangeEvent, KeyboardEvent} from "react";
import {StateType} from "./Redux/Store";
import {ActionsType} from "./Redux/ActionCreators";
import {UserProfileType} from "./components/Profile/ProfilleInfo/ProfileInfo";

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
    dispatch: (action: ActionsType) => void
    getState: () => StateType                        //StateType тип создан автоматом
    subscribe: (observer: () => void) => void

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
    currentUser: null | UserProfileType
}

//props types


export type PostsListPropsType = {
    arr: Array<OnePostType>
}

export type DialogListPropsType = {
    arr: Array<OneDialogueType>
}
export type MessagesListPropsType = {
    arr: Array<OneMessageType>
}

///////

//AC types

//test commit


export type ReFormPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    onclickHandler: () => void
    inputValue: string

}

export type UserStateType = {
    users: OneUserType[]
    pageNumbers: number
    totalUsers:number
    usersReceivedStatus: boolean
}

export type OneUserType = {

    followed: boolean
    id: number
    name: string
    photos: { small: null | string, large: null | string }
    status: null | string
    uniqueUrlName: null | string

}



