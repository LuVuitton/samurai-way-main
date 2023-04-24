import {ActionsType, authMeAC} from "../ActionCreators";
import {authAPI} from "../../DAL/AuthAPI";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";
import {setIsLoadingAC} from "./appReducer";


const initState = {
    authData: {} as MeDataType,
    isAuth: false,
    myID:2
}

export const authReducer = (state: typeof initState = initState, action: ActionsType): typeof initState => { //перед стрелкой пишем тип который возвращается
    switch (action.type) {
        case "AUTH-ME":
            return {...state, authData: action.payload.meData, isAuth: true, myID: action.payload.meData.id}
    }
    return {...state}
}




export const checkMETC = () => (dispatch: AppDispatchType) => {
    dispatch(setIsLoadingAC(true))
    authAPI.checkME()
        .then(r => {
            if (r.resultCode === 0) {
                dispatch(authMeAC(r.data))
            }
        })
        .finally(() => {
            dispatch(setIsLoadingAC(false))
        })
}





export type MeDataType = {
    id: number,
    email: string,
    login: string
}

export type GeneralResponseType<D={}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: D
}
