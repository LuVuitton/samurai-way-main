import {instance} from "./UsersAPI";
import {GeneralResponseType} from "../Redux/Reducers/authReducer";
import {ProfileType} from "../Redux/Reducers/ProfileReducer";


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


