import {v1} from "uuid";
import {dataTime} from "../../DataTime";
import {ActionsType} from "../ActionCreators";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";
import {profileAPI} from "../../DAL/ProfileAPI";


const profileInitialState: ProfileStateType = {
    postsArr: [
        // {id: v1(), text: 'post for feed', time: '00:01'},
        // {id: v1(), text: 'first post for feed', time: '00:02'},
        // {id: v1(), text: 'second post for feed', time: '00:03'},
    ],
    controlledInputPostValue: '',
    currentUser: {} as ProfileType,
    statusMessage: '',
}


export const profileReducer = (state: ProfileStateType = profileInitialState, action: ActionsType): ProfileStateType => { //перед стрелкой пишем тип который возвращается
    switch (action.type) {
        case 'profile/ADD-POST':
            const newPost = {id: v1(), text: state.controlledInputPostValue, time: dataTime().dataTime.currentTime};
            return {
                ...state, postsArr: [...state.postsArr, newPost],
                controlledInputPostValue: ''
            }
        case 'profile/UPDATE-POST-INPUT-VALUE':
            return {...state, controlledInputPostValue: action.payload.currentValue}

        case "profile/SET-USER-PROFILE":
            return {...state, currentUser: action.payload.userProfile}

        case "profile/SET-STATUS_MESSAGE":
            return {...state, statusMessage: action.payload.statusMessage}
        case "profile/SET-PROFILE-PHOTO":
            return {...state, currentUser: {...state.currentUser, photos: action.payload.photos}}
    }
    return {...state}
}


export const setUserProfileTC = (userID: number) => (dispatch: AppDispatchType) => {
    profileAPI.getProfile(userID)
        .then(r => {
            dispatch(setUserProfile(r.data))
        })
}
export const getProfileStatusTC = (userID: number) => (dispatch: AppDispatchType) => {
    profileAPI.getProfileStatus(userID)
        .then(r => {
            dispatch(setStatusMessageAC(r.data))
        })
}
export const updateProfileStatusTC = (statusMessage: string) => (dispatch: AppDispatchType) => {
    profileAPI.updateProfileStatus(statusMessage)
        .then((r) => {
            if (r.data.resultCode === 0) {
                dispatch(setStatusMessageAC(statusMessage))
            }
        })
}
export const uploadProfilePhotoTC = (image: File) => (dispatch: AppDispatchType) => {
    profileAPI.uploadProfilePhoto(image)
        .then(r => {
            dispatch(setProfilePhotoAC(r.data.data.photos))
        })
}

export const setProfilePhotoAC = (photos:{ small: string, large: string }) =>
    ( {type: 'profile/SET-PROFILE-PHOTO', payload: {photos}} as const)
export const setStatusMessageAC = (statusMessage: string) =>
    ({type: 'profile/SET-STATUS_MESSAGE', payload: {statusMessage}} as const)
export const setUserProfile = (userProfile: any) =>
    ({type: 'profile/SET-USER-PROFILE', payload: {userProfile}} as const);
export const addPostAC = () =>
    ({type: 'profile/ADD-POST'} as const);
export const updatePostInputValueAC = (currentValue: string) =>
    ({type: 'profile/UPDATE-POST-INPUT-VALUE', payload: {currentValue}} as const);


export type ProfileStateType = {
    postsArr: Array<OnePostType>
    controlledInputPostValue: string
    currentUser: ProfileType
    statusMessage: string
}

export type OnePostType = {
    id: string
    text: string | undefined //пофиксить андефайнд
    time: string
}
export type ProfileContacts = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContacts
    photos: {
        small: string
        large: string
    }
}