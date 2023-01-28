import {ActionType, OnePostType} from "../../Types";
import {v1} from "uuid";

type profileStateType = {
    posts: Array<OnePostType>
    controlledInputPostValue: string
}

const ProfileReducer = (profileState: profileStateType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: v1(), text: profileState.controlledInputPostValue, time: '00:01'};
            profileState.posts = [...profileState.posts, newPost];
            profileState.controlledInputPostValue = ''
            break;
        case 'UPDATE-POST-INPUT-VALUE':
            profileState.controlledInputPostValue = action.payload.currentValue
            break;
    }
    return {...profileState}
}