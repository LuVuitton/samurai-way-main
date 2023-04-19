import {OneUserType, UserStateType} from "../../Types";
import {ActionsType} from "../ActionCreators";

const usersInitialState: UserStateType = {
    users: [],
    pageNumbers: 1,
    totalUsers: 0,
    usersReceivedStatus: false
}


export const switchSubStatusAC = (userID: number) => {
    return {
        type: 'SWITCH-SUB-STATUS',
        payload: {
            userID
        }
    } as const
}
export const setUsersAC = (receivedUsersArr: OneUserType[], totalUsers: number) => {
    return {
        type: 'SET-USERS',
        payload: {
            receivedUsersArr,
            totalUsers
        }
    } as const
}
export const showMoreAC = () => {
    return {
        type: 'SHOW-MORE',
    } as const
}


export const UsersReducer = (state: UserStateType = usersInitialState, action: ActionsType): UserStateType => { //перед стрелкой пишем тип который возвращается

    switch (action.type) {
        case 'SWITCH-SUB-STATUS':
            return {
                ...state,
                users: state.users.map(e => e.id === action.payload.userID ? {...e, followed: !e.followed} : e)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.payload.receivedUsersArr],
                totalUsers: action.payload.totalUsers,
                usersReceivedStatus: true,
                pageNumbers: (state.pageNumbers + 1)
            }
        case 'SHOW-MORE':
            return {
                ...state,
                pageNumbers: (state.pageNumbers + 1)
            }
        case "CLEAR-USERS-STATE":
            return {...state,  users: [], pageNumbers: 1}
    }
    return state
}


export const clearUsersState = ()=> {
    return {
        type: 'CLEAR-USERS-STATE'
    } as const
}