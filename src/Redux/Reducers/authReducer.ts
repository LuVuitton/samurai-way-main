import {ActionsType} from "../ActionCreators";

export type MeDataType = {
    id: number,
    email: string,
    login: string
}

export type GeneralResponseType<D> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: D
}

const initState = {
    authData: {} as MeDataType,
    isAuth: false
}

export const authReducer = (state: typeof initState = initState, action: ActionsType):  typeof initState => { //перед стрелкой пишем тип который возвращается
    switch (action.type) {
        case "AUTH-ME":
            return {...state, authData:action.payload.meData, isAuth: true}
    }
    return {...state}
}


export const authMeAC = (meData: MeDataType) => {
    return {
        type: 'AUTH-ME',
        payload: {
            meData
        }
    } as const
}