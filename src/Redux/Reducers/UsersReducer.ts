import {OneUserType, UserStateType} from "../../Types";

const usersInitialState: UserStateType = {
    users: [],
    pageNumbers: 1,
    totalUsers: 0,
    usersReceivedStatus: false
}

export type ACTypes = switchSubStatusACType | setUsersACType | showMoreACType
export type switchSubStatusACType = ReturnType<typeof switchSubStatusAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type showMoreACType = ReturnType<typeof showMoreAC>

export const switchSubStatusAC = (userID: number) => {
    return {
        type: 'SWITCH-SUB-STATUS',
        payload: {
            userID
        }
    } as const
}
export const setUsersAC = (receivedUsersArr: OneUserType[], totalUsers:number) => {
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


export const UsersReducer = (state: UserStateType = usersInitialState, action: ACTypes): UserStateType => { //перед стрелкой пишем тип который возвращается

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
                usersReceivedStatus: true
            }
            case 'SHOW-MORE':
            return {
                ...state,
                pageNumbers: state.pageNumbers + 1
            }
    }
    return state
}