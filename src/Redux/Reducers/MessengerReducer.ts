import {v1} from "uuid";
import {ActionsType} from "../ActionCreators";

const messengerInitialState:MessengerStateType = {
    dialoguesArr: [
        {id: v1(), userName: 'Name'},
        {id: v1(), userName: 'FirstName'},
        {id: v1(), userName: 'SecondName'},
    ],
    messagesArr: [
        // {id: v1(), text: 'message for dialogue'},
        // {id: v1(), text: 'first message foe dialogue'},
        // {id: v1(), text: 'second message foe dialogue'},
    ],
    controlledInputMessengerValue: '',
}

export const MessengerReducer = (state: MessengerStateType = messengerInitialState, action: ActionsType):MessengerStateType => { //перед стрелкой пишем тип который возвращается
    switch (action.type) {
            case 'auth/UPDATE-MESSENGER-INPUT-VALUE':
                state.controlledInputMessengerValue = action.payload.currentValue
                break;
            case 'auth/ADD-MESSAGE':
                state.messagesArr = [...state.messagesArr, {
                    id: v1(),
                    text: state.controlledInputMessengerValue
                },]
                state.controlledInputMessengerValue = ''
    }
    return {...state}
}


export const updateMessengerInputValueAC = (currentValue: string) =>
    ({type: 'auth/UPDATE-MESSENGER-INPUT-VALUE', payload: {currentValue}} as const);
export const addMessageAC = () =>
    ({type: 'auth/ADD-MESSAGE'} as const);



export type MessengerStateType = {
    dialoguesArr: Array<OneDialogueType>
    messagesArr: Array<OneMessageType>
    controlledInputMessengerValue: string
}

export type OneDialogueType = {
    id: string
    userName: string
}
export type OneMessageType = {
    id: string
    text: string
}

