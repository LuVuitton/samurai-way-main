import {ActionType, MessengerStateType} from "../../Types";
import {v1} from "uuid";

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

export const MessengerReducer = (state: MessengerStateType = messengerInitialState, action: ActionType):MessengerStateType => { //перед стрелкой пишем тип который возвращается
    switch (action.type) {
            case 'UPDATE-MESSENGER-INPUT-VALUE':
                state.controlledInputMessengerValue = action.payload.currentValue
                break;
            case 'ADD-MESSAGE':
                state.messagesArr = [...state.messagesArr, {
                    id: v1(),
                    text: state.controlledInputMessengerValue
                },]
                state.controlledInputMessengerValue = ''
    }
    console.log('MessengerReducer')
    return {...state}
}