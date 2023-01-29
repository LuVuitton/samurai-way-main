//неиспользуемые типы стора
type OldStoreType = {
    _subscriber: () => void
    _state: StateType
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: DispatchType
}
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
    state: StateType
    dispatch: DispatchType
}
export type MyPostsPropsType = {
    state: StateType
    dispatch: DispatchType
}
export type DialoguesPropsType = {
    state: StateType
    dispatch: DispatchType
}
export type DialogItemPropsType = {
    dialoguesArr: Array<OneDialogueType>
}
export type MessagesPropsType = {
    messagesArr: Array<OneMessageType>
}

///////
export type ActionType = {
    type: string
    payload?: any
}
type DispatchType = (action: ActionType) => void
//AC types
export type addPostACType = () => ActionType
export type addMessageACType = () => ActionType
export type updatePostInputValueACType = (currentValue: string) => ActionType
export type updateMessengerInputValueACType = (currentValue: string) => ActionType

