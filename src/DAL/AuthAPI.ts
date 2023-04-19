import axios from "axios";
import {GeneralResponseType, MeDataType} from "../Redux/Reducers/authReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const authAPI = {
    checkME(){
      return   instance.get<GeneralResponseType<MeDataType>>('auth/me')
            .then(r => {
                return r.data
            })
    }
}
