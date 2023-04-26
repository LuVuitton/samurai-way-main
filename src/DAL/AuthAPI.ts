import {GeneralResponseType, LoginDataType, MeDataType} from "../Redux/Reducers/authReducer";
import {instance} from "./UsersAPI";


export const authAPI = {
    checkME() {
        return instance.get<GeneralResponseType<MeDataType>>('auth/me')
            .then(r => {
                return r.data
            })
    },
    login(loginData:LoginDataType){
        return instance.post<GeneralResponseType<{userID:number}>>(`auth/login`, loginData)
    },
    logout(){
        return instance.delete<GeneralResponseType>(`auth/login`)
    }
}
