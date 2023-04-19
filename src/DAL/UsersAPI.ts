import axios from "axios";
import {GeneralResponseType} from "../Redux/Reducers/authReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(pageNumbers: number,) {
        return instance.get(`users?count=3&page=${pageNumbers}`)
            .then(r => {
                return r.data
            })
    },
    follow(userID: number) {
        return instance.post<GeneralResponseType<{}>>(`follow/${userID}`, {},)
            .then(r => {
                return r.data
            })
    },
    unFollow(userID: number){
        return instance.delete<GeneralResponseType<{}>>(`follow/${userID}`, {},)
            .then(r => {
                return r.data
            })
    }
}