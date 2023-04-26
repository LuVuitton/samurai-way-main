import {OneUserType} from "./Reducers/UsersReducer";
import {logoutAC, MeDataType} from "./Reducers/authReducer";
import {setIsLoadingAC} from "./Reducers/appReducer";

export const addPostAC = () =>
    ({type: 'ADD-POST'} as const);
export const updatePostInputValueAC = (currentValue: string) =>
    ({type: 'UPDATE-POST-INPUT-VALUE', payload: {currentValue}} as const);
export const updateMessengerInputValueAC = (currentValue: string) =>
    ({type: 'UPDATE-MESSENGER-INPUT-VALUE', payload: {currentValue}} as const);
export const addMessageAC = () =>
    ({type: 'ADD-MESSAGE'} as const);
export const setUserProfile = (userProfile: any) =>
    ({type: 'SET-USER-PROFILE', payload: {userProfile}} as const);
export const clearUsersState = () =>
    ({type: 'CLEAR-USERS-STATE'} as const);
export const setUsersAC = (receivedUsersArr: OneUserType[], totalUsers: number) =>
    ({type: 'SET-USERS', payload: {receivedUsersArr, totalUsers}} as const);
export const showMoreAC = () =>
    ({type: 'SHOW-MORE'} as const);
export const setUsersAreLoading = (userID: number, isLoading: boolean) =>
    ({type: 'SET-USER-ARE-LOADING', payload: {isLoading, userID}} as const);
export const authMeAC = (meData: MeDataType) =>
    ({type: 'AUTH-ME', payload: {meData}} as const)
export const followAC = (userID: number) =>
    ({type: 'FOLLOW', payload: {userID}} as const);
export const unfollowAC = (userID: number) =>
    ({type: 'UNFOLLOW', payload: {userID}} as const);
export const setStatusMessageAC = (statusMessage: string) =>
    ({type: 'SET-STATUS_MESSAGE', payload: {statusMessage}} as const)


export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostInputValueAC>
    | ReturnType<typeof updateMessengerInputValueAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof showMoreAC>
    | ReturnType<typeof authMeAC>
    | ReturnType<typeof clearUsersState>
    | ReturnType<typeof setIsLoadingAC>
    | ReturnType<typeof setUsersAreLoading>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setStatusMessageAC>
    | ReturnType<typeof logoutAC>
