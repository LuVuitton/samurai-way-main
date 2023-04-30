import {ActionsType} from "../ActionCreators";
import {usersAPI} from "../../DAL/UsersAPI";
import {setAppStatus, setErrorMessage, setIsLoadingAC} from "./appReducer";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";

export type UserStateType = typeof usersInitialState

export type OneUserType = {
    followed: boolean
    id: number
    name: string
    photos: { small: null | string, large: null | string }
    status: null | string
    uniqueUrlName: null | string
}


const usersInitialState = {
    users: [] as OneUserType[],
    pageNumbers: 1,
    totalUsers: 0,
    usersReceivedStatus: false,
    usersAreLoading: [] as number[]
}


export const usersReducer = (state: UserStateType = usersInitialState, action: ActionsType): UserStateType => { //перед стрелкой пишем тип который возвращается

    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: state.users.map(e => e.id === action.payload.userID ? {...e, followed: true} : e)
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(e => e.id === action.payload.userID ? {...e, followed: false} : e)
            }
        case 'users/SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.payload.receivedUsersArr],
                totalUsers: action.payload.totalUsers,
                usersReceivedStatus: true,
                pageNumbers: (state.pageNumbers + 1)
            }
        case 'users/SHOW-MORE':
            return {
                ...state,
                pageNumbers: (state.pageNumbers + 1)
            }
        case "users/CLEAR-USERS-STATE":
            return {...state, users: [], pageNumbers: 1}
        case "users/SET-USER-ARE-LOADING": {
            if (action.payload.isLoading) {
                return {...state, usersAreLoading: [...state.usersAreLoading, action.payload.userID]}
            } else {
                return {...state, usersAreLoading: state.usersAreLoading.filter(e => e !== action.payload.userID)}
            }
        }
    }
    return {...state}
}


export const getUsersTC = (pageNumber: number) => (dispatch: AppDispatchType) => {
    dispatch(setIsLoadingAC(true))
    usersAPI.getUsers(pageNumber)
        .then(r => {
            dispatch(setUsersAC(r.items, r.totalCount))
        })
        .catch(err=>{
            dispatch(setErrorMessage(err))
            dispatch(setAppStatus("failed"))
        })
        .finally(() => {
            dispatch(setIsLoadingAC(false))
        })
}

export const onFollowTC = (userID: number) => (dispatch: AppDispatchType) => {
    dispatch(setUsersAreLoading(userID, true))
    usersAPI.follow(userID)
        .then(r => {
            if (r.resultCode === 0) {
                dispatch(followAC(userID))
            }
        })
        .catch(err=>{
            dispatch(setErrorMessage(err))
            dispatch(setAppStatus("failed"))
        })
        .finally(() => {
            dispatch(setUsersAreLoading(userID, false))
        })
}

export const onUnfollowTC = (userID: number) => (dispatch: AppDispatchType) => {
    dispatch(setUsersAreLoading(userID, true))
    usersAPI.unFollow(userID)
        .then(r => {
            if (r.resultCode === 0) {
                dispatch(unfollowAC(userID))
            }
        })
        .catch(err=>{
            dispatch(setErrorMessage(err))
            dispatch(setAppStatus("failed"))
        })
        .finally(() => {
            dispatch(  setUsersAreLoading(userID, false))
        })
}


export const unfollowAC = (userID: number) =>
    ({type: 'users/UNFOLLOW', payload: {userID}} as const);
export const setUsersAC = (receivedUsersArr: OneUserType[], totalUsers: number) =>
    ({type: 'users/SET-USERS', payload: {receivedUsersArr, totalUsers}} as const);
export const setUsersAreLoading = (userID: number, isLoading: boolean) =>
    ({type: 'users/SET-USER-ARE-LOADING', payload: {isLoading, userID}} as const);
export const followAC = (userID: number) =>
    ({type: 'users/FOLLOW', payload: {userID}} as const);
export const clearUsersState = () =>
    ({type: 'users/CLEAR-USERS-STATE'} as const);
export const showMoreAC = () =>
    ({type: 'users/SHOW-MORE'} as const);
