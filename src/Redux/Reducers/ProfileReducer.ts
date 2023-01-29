import {ActionType, ProfileStateType} from "../../Types";
import {v1} from "uuid";
import {dataTime} from "../../DataTime";


const initialState = {
        postsArr: [
            // {id: v1(), text: 'post for feed', time: '00:01'},
            // {id: v1(), text: 'first post for feed', time: '00:02'},
            // {id: v1(), text: 'second post for feed', time: '00:03'},
        ],
        controlledInputPostValue: '',
    }



export const ProfileReducer = (state: ProfileStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: v1(), text: state.controlledInputPostValue, time: dataTime().dataTime.currentTime};
            state.postsArr = [...state.postsArr, newPost];
            state.controlledInputPostValue = ''
            break;
        case 'UPDATE-POST-INPUT-VALUE':
            state.controlledInputPostValue = action.payload.currentValue
            break;
    }
    return {...state}
}