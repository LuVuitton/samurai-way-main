import {v1} from "uuid";

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
type OneDialogueItemType = {
    id: string
    userName: string
}
type OneMessageType = {
    id: string
    text: string
}
export type MessagesType = Array<OneMessageType>
export type DialogueItemType = Array<OneDialogueItemType>
export type MessengerType = {
    dialogueItem: DialogueItemType
    messages: MessagesType
}


export const state: StateType = {
    profile: {
        posts: [
            {id: v1(), text: 'post for feed', time: '00:01'},
            {id: v1(), text: 'first post for feed', time: '00:02'},
            {id: v1(), text: 'second post for feed', time: '00:03'},
        ],
        controlledInputPostValue: '',
    },
    messenger: {
        dialogueItem: [
            {id: v1(), userName: 'Name'},
            {id: v1(), userName: 'FirstName'},
            {id: v1(), userName: 'SecondName'},
        ],
        messages: [
            {id: v1(), text: 'message for dialogue'},
            {id: v1(), text: 'first message foe dialogue'},
            {id: v1(), text: 'second message foe dialogue'},
        ]
    }
}


export type AddPostType = () => void //пофиксить андефайнд
export type updateInputValueType = (currentValue: string) => void


export const updateInputValue: updateInputValueType = (currentValue) => {
    state.profile.controlledInputPostValue = currentValue
    rerenderAllTree()
}

export const addPost: AddPostType = () => {
    const newPost = {id: v1(), text: state.profile.controlledInputPostValue, time: '00:01'};
    state.profile.posts = [...state.profile.posts, newPost];
    rerenderAllTree()
}

let rerenderAllTree=()=>{};

export const subscriber = (observer:()=>void)=> {
    rerenderAllTree = observer
}





