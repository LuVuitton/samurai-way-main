import {clearUsersState, setUsersAC, setUsersAreLoading, showMoreAC, switchSubStatusAC} from "./Reducers/UsersReducer";
import {authMeAC} from "./Reducers/authReducer";
import {setIsLoadingAC} from "./Reducers/appReducer";

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updatePostInputValueAC = (currentValue: string) => {
    return {
        type: 'UPDATE-POST-INPUT-VALUE',
        payload: {
            currentValue: currentValue
        }
    } as const
}
export const updateMessengerInputValueAC = (currentValue: string) => {
    return {
        type: 'UPDATE-MESSENGER-INPUT-VALUE',
        payload: {
            currentValue: currentValue
        }
    } as const
}
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const setUserProfile = (userProfile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            userProfile
        }
    } as const
}

export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostInputValueAC>
    | ReturnType<typeof updateMessengerInputValueAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof switchSubStatusAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof showMoreAC>
    | ReturnType<typeof authMeAC>
    | ReturnType<typeof clearUsersState>
    | ReturnType<typeof setIsLoadingAC>
    | ReturnType<typeof setUsersAreLoading>
