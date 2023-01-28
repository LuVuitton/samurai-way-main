type OneDialogueItemType = {
    id: string
    userName: string
}
type OneMessageType = {
    id: string
    text: string
}
export type StateType = {
    profile: {
        posts: Array<OnePostType>
        controlledInputPostValue: string
    }
    messenger: MessengerType
}
export type OnePostType = {
    id: string
    text: string | undefined //пофиксить андефайнд
    time: string
}
export type MessagesType = Array<OneMessageType>
export type DialogueItemType = Array<OneDialogueItemType>
export type MessengerType = {
    dialogueItem: DialogueItemType
    messages: MessagesType
    controlledInputMessengerValue: string
}
export type UpdatePostInputValueType = (currentValue: string) => void
export type UpdateMessengerInputValueType = (currentValue: string) => void
export type ActionType = {
    type: string
    payload?: any
}
export type StoreType = {
    _subscriber: () => void
    _state: StateType
    _updatePostInputValue: UpdatePostInputValueType
    _updateMessengerInputValue: UpdateMessengerInputValueType
    _addPost: () => void
    _addMessage: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
export type addPostACType = () => ActionType
export type updatePostInputValueACType = (currentValue: string) => ActionType
export type updateMessengerInputValueACType = (currentValue: string) => ActionType
export type AppPropsType = {
    store: StoreType,
}
export type ProfilePropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}
export type MyPostsPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}
export type DialoguesPropsType = {
    state:StateType
    dispatch:(action:ActionType)=>void
}
export type DialogItemPropsType ={
    dialogItem: DialogueItemType
}
export type MessagesPropsType = {
    messages: MessagesType
}


