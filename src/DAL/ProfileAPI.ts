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
    uploadProfilePhoto(image:File) {
        const formData = new FormData();
        formData.append('image', image)

        return instance.put<GeneralResponseType<{ photos: { small: string, large: string } }>>('/profile/photo', formData, {headers: {'Content-Type':'multipart/form-data'}})
    }
}


