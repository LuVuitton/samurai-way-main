import {ActionsType, setUsersAC, setUsersAreLoading, followAC, unfollowAC} from "../ActionCreators";
import {usersAPI} from "../../DAL/UsersAPI";
import {setIsLoadingAC} from "./appReducer";
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


export const UsersReducer = (state: UserStateType = usersInitialState, action: ActionsType): UserStateType => { //перед стрелкой пишем тип который возвращается

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(e => e.id === action.payload.userID ? {...e, followed: true} : e)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(e => e.id === action.payload.userID ? {...e, followed: false} : e)
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
            return {...state, users: [], pageNumbers: 1}
        case "SET-USER-ARE-LOADING": {
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
        .finally(() => {
            dispatch(  setUsersAreLoading(userID, false))
        })
}