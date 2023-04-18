import { ProfileStateType} from "../../Types";
import {v1} from "uuid";
import {dataTime} from "../../DataTime";
import {ActionsType} from "../ActionCreators";


const profileInitialState: ProfileStateType = {
    postsArr: [
        // {id: v1(), text: 'post for feed', time: '00:01'},
        // {id: v1(), text: 'first post for feed', time: '00:02'},
        // {id: v1(), text: 'second post for feed', time: '00:03'},
    ],
    controlledInputPostValue: '',
    currentUser: null
}


export const ProfileReducer = (state: ProfileStateType = profileInitialState, action: ActionsType):ProfileStateType => { //перед стрелкой пишем тип который возвращается
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: v1(), text: state.controlledInputPostValue, time: dataTime().dataTime.currentTime};
            return {
                ...state, postsArr: [...state.postsArr, newPost],
                controlledInputPostValue: ''
            }

        case 'UPDATE-POST-INPUT-VALUE':
         return {...state, controlledInputPostValue: action.payload.currentValue}

        case "SET-USER-PROFILE": {
            return {...state, currentUser: action.payload.userProfile}
        }
    }
    return {...state}
}