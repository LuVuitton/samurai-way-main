import {v1} from "uuid";
import {ActionsType} from "../ActionCreators";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";
import {profileAPI} from "../../DAL/ProfileAPI";
import {RootStateType} from "../Store";
import {setAppStatus, setErrorMessage} from "./appReducer";


const profileInitialState: ProfileStateType = {
    postsArr: [
        {
            id: v1(),
            text: 'since the API does not yet have access to the feed, these posts were written by the GPT chat',
            time: '00:01'
        },
        {
            id: v1(),
            text: 'Just had a great conversation with ChatGPT, my AI alter-ego! We talked about the meaning of life, the universe, and everything. The answer is still 42, by the way. #DeepThoughts #AIChat',
            time: '00:01'
        },
        {
            id: v1(),
            text: 'I just finished reading a really interesting book about quantum mechanics. I don\'t pretend to understand all of it, but it\'s fascinating to think about how reality might be stranger than we can even imagine! #QuantumWonderland',
            time: '00:02'
        },
        {
            id: v1(),
            text: 'Did you know that the average person spends six months of their life waiting for red lights to turn green? Time to start practicing your dance moves at stoplights! #TrafficJamJams',
            time: '00:03'
        },
    ],
    controlledInputPostValue: '',
    currentUser: {} as ProfileType,
    statusMessage: '',
}

function formatTime(time: Date): string {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

export const profileReducer = (state: ProfileStateType = profileInitialState, action: ActionsType): ProfileStateType => { //перед стрелкой пишем тип который возвращается
    switch (action.type) {
        case 'profile/ADD-POST':
            const newPost = {id: v1(), text: state.controlledInputPostValue, time: formatTime(new Date())};
            return {
                ...state, postsArr: [newPost, ...state.postsArr],
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
        case "profile/DELETE-POST":
            return {...state, postsArr: state.postsArr.filter(e => e.id !== action.payload.postID)}

    }
    return {...state}
}

export const updateProfileDataTC = (formData: any) => (dispatch: AppDispatchType, getState: () => RootStateType) => {
    // const {aboutMe, fullName, lookingForAJob, lookingForAJobDescription, ...restProps} = formData
    // const profileModel = {
    //     aboutMe,
    //     fullName,
    //     lookingForAJob,
    //     lookingForAJobDescription,
    //     contacts: {...restProps} // сними еще выясняем)
    // }
    const userID = getState().auth.myID

    return profileAPI.updateProfileData(formData)
        .then(r => {
            if (r.data.resultCode === 0) {
                dispatch(setUserProfileTC(userID))
                return Promise.resolve()
            } else {
                return Promise.reject(r.data.messages[0])
            }
        })
        .catch(err => {
            dispatch(setErrorMessage(err))
            dispatch(setAppStatus("failed"))
        })
}


export const setUserProfileTC = (userID: number) => (dispatch: AppDispatchType) => {
    profileAPI.getProfile(userID)
        .then(r => {
            dispatch(setUserProfile(r.data))
        })
        .catch(err => {
            dispatch(setErrorMessage(err))
            dispatch(setAppStatus("failed"))
        })
}
export const getProfileStatusTC = (userID: number) => (dispatch: AppDispatchType) => {
    profileAPI.getProfileStatus(userID)
        .then(r => {
            dispatch(setStatusMessageAC(r.data))
        })
        .catch(err => {
            dispatch(setErrorMessage(err))
            dispatch(setAppStatus("failed"))
        })
}
export const updateProfileStatusTC = (statusMessage: string) => (dispatch: AppDispatchType) => {
    profileAPI.updateProfileStatus(statusMessage)
        .then((r) => {
            if (r.data.resultCode === 0) {
                dispatch(setStatusMessageAC(statusMessage))
            }
        })
        .catch(err => {
            dispatch(setErrorMessage(err))
            dispatch(setAppStatus("failed"))
        })
}
export const uploadProfilePhotoTC = (image: File) => (dispatch: AppDispatchType) => {
    profileAPI.uploadProfilePhoto(image)
        .then(r => {
            dispatch(setProfilePhotoAC(r.data.data.photos))
        })
        .catch(err => {
            dispatch(setErrorMessage(err))
            dispatch(setAppStatus("failed"))
        })
}

export const setProfilePhotoAC = (photos: { small: string, large: string }) =>
    ({type: 'profile/SET-PROFILE-PHOTO', payload: {photos}} as const)
export const setStatusMessageAC = (statusMessage: string) =>
    ({type: 'profile/SET-STATUS_MESSAGE', payload: {statusMessage}} as const)
export const setUserProfile = (userProfile: any) =>
    ({type: 'profile/SET-USER-PROFILE', payload: {userProfile}} as const);
export const addPostAC = () =>
    ({type: 'profile/ADD-POST'} as const);
export const updatePostInputValueAC = (currentValue: string) =>
    ({type: 'profile/UPDATE-POST-INPUT-VALUE', payload: {currentValue}} as const);
export const deletePostAC = (postID: string) =>
    ({type: 'profile/DELETE-POST', payload: {postID}} as const);


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