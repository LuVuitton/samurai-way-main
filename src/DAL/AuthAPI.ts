import {GeneralResponseType, MeDataType} from "../Redux/Reducers/authReducer";
import {instance} from "./UsersAPI";


export const authAPI = {
    checkME() {
        return instance.get<GeneralResponseType<MeDataType>>('auth/me')
            .then(r => {
                return r.data
            })
    }
}
