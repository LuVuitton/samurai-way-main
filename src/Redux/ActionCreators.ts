import {
    addMessageACType,
    addPostACType,
    updateMessengerInputValueACType,
    updatePostInputValueACType
} from "../Types";

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
export const addMessageAC: addMessageACType = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}