import {v1} from "uuid";
import {addPostACType, StoreType, updateMessengerInputValueACType, updatePostInputValueACType} from "../Types";

export const addPostAC: addPostACType = () => {
    return {
        type: 'ADD-POST'
    }
}
export const updatePostInputValueAC: updatePostInputValueACType = (currentValue) => {
    return {
        type: 'UPDATE-POST-INPUT-VALUE',
        payload: {
            currentValue: currentValue
        }
    }
}
export const updateMessengerInputValueAC: updateMessengerInputValueACType = (currentValue) => {
    return {
        type: 'UPDATE-MESSENGER-INPUT-VALUE',
        payload: {
            currentValue: currentValue
        }
    }
}
export const addMessageAC: addPostACType = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}



export const store: StoreType = {
    _subscriber() {
        console.log('шо там') //сюда можем передать любую функцию и она будет вызываться каждый раз когда с обьектом происходят изменение,
    },        //если точнее, мы сами прописали эту логику, в каждом из методов мы прописываем вызов субскрайбера(метод которому мы присвоили свою функцию)
    _state: {
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
            ],
            controlledInputMessengerValue: '',
        }
    },

    _updatePostInputValue(currentValue) {
        this._state.profile.controlledInputPostValue = currentValue
        this._subscriber()
    },
    _updateMessengerInputValue(currentValue) {
        this._state.messenger.controlledInputMessengerValue = currentValue
        this._subscriber()
    },
    _addPost() {
        const newPost = {id: v1(), text: this._state.profile.controlledInputPostValue, time: '00:01'};
        this._state.profile.posts = [...this._state.profile.posts, newPost];
        this._state.profile.controlledInputPostValue = ''
        this._subscriber()
    },
    _addMessage() {
        this._state.messenger.messages = [...this._state.messenger.messages, {
            id: v1(),
            text: this._state.messenger.controlledInputMessengerValue
        },]
        this._state.messenger.controlledInputMessengerValue = ''
        this._subscriber()

    },

    subscribe(observer) {
        this._subscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {


        // switch (action.type) {
        //     case 'ADD-POST':
        //         this._addPost()
        //         break;
        //     case 'UPDATE-POST-INPUT-VALUE':
        //         this._updatePostInputValue(action.payload.currentValue)
        //         break;
        //     case 'UPDATE-MESSENGER-INPUT-VALUE':
        //         this._updateMessengerInputValue(action.payload.currentValue)
        //         break;
        //     case 'ADD-MESSAGE':
        //         this._addMessage()
        //         break;
        // }
    }
}








