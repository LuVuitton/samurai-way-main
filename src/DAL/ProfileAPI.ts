import {instance} from "./UsersAPI";
import {GeneralResponseType} from "../Redux/Reducers/authReducer";


export const profileAPI = {
    getProfile(userID: number) {
        return instance.get<ProfileType>(`profile/${userID}`)
    },
    getProfileStatus(userID: number) {
        return instance.get<string>(`/profile/status/${userID}`)
    },
    //не указываем ID потому как можем обновить только свой статус
    updateProfileStatus(newStatus: string) {
        return instance.put<GeneralResponseType>(`/profile/status`, {status: newStatus})
    },
}


export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}