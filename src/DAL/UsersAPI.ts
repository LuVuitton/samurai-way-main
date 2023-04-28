import axios from "axios";
import {GeneralResponseType} from "../Redux/Reducers/authReducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'0ba2ec4-2ba1-411d-b8a2-7b24b30ac2ca'
    }
})


export const usersAPI = {
    getUsers(pageNumbers: number,) {
        return instance.get(`users?count=3&page=${pageNumbers}`)
            .then(r => {
                return r.data
            })
    },
    follow(userID: number) {
        return instance.post<GeneralResponseType<{}>>(`follow/${userID}`)
            .then(r => {
                return r.data
            })
    },
    unFollow(userID: number) {
        return instance.delete<GeneralResponseType<{}>>(`follow/${userID}`)
            .then(r => {
                return r.data
            })
    },
}