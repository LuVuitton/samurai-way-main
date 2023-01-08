import messages from "./Dialogues/Messages/Messages";
import {v1} from "uuid";
export type InitialStateType = {
    posts: Array<OnePostType>
    messenger: MessengerType
}
export type OnePostType = {
    id:string
    text:string
    time:string
}
export type PostsType = Array<OnePostType>
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

export const initialState: InitialStateType = {
    posts: [
        {id:v1(), text:'post for feed', time: '00:01'},
        {id:v1(), text:'first post for feed', time: '00:02'},
        {id:v1(), text:'second post for feed', time: '00:03'},
    ],
    messenger: {
        dialogueItem: [
            {id: v1(), userName: 'Name'},
            {id: v1(), userName: 'FirstName'},
            {id: v1(), userName: 'SecondName'},
        ],
        messages:[
            {id:v1(), text:'message for dialogue'},
            {id:v1(), text:'first message foe dialogue'},
            {id:v1(), text:'second message foe dialogue'},
        ]
    }
}




