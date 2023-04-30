import {ActionsType} from "../ActionCreators";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";
import {checkMETC} from "./authReducer";

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed' // бездействующий|загружается|успешно|неуспешно
export type AppErrorMessageType = string | null
export type AppStateType = typeof initAppState

const initAppState = {
    appStatus: 'idle' as StatusType,
    appErrorMessage: null as AppErrorMessageType,
    isLoading: false, // везде заменить на аппСтатус
    isInitialized: false,

}

export const appReducer = (state: AppStateType = initAppState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case "app/SET-IS-LOADING":
            return {...state, isLoading: action.payload.isLoading}
        case "app/SET-IS-INITIALIZED":
            return {...state, isInitialized: true}
        case "app/SET-APP-STATUS":
            return  {...state, appStatus: action.payload.appStatus}
        case "app/SET-ERROR-MESSAGE":
            return {...state, appErrorMessage: action.payload.errorMessage}


        default:
            return {...state}
    }

}


export const initializeAppTC = () => (dispatch: AppDispatchType) => {
// диспатч вернет то что вернет санка, поэтомувнутри санки добавил ретерн,
// после, диспатчим инитиализейтд на тру через промис ол, для того что бы можно было добовлять другие диспатчи,
    const dispatchRes = dispatch(checkMETC())

    Promise.all([dispatchRes])
        .then(() => dispatch(setIsInitialized()))

}

export const setErrorMessage = (errorMessage: AppErrorMessageType)=> {
    return {
        type: 'app/SET-ERROR-MESSAGE',
        payload: {
            errorMessage
        }
    } as const
}

export const setAppStatus = (appStatus: StatusType) => {
    return {
        type: 'app/SET-APP-STATUS',
        payload: {appStatus}
    } as const
}

export const setIsLoadingAC = (isLoading: boolean) => {
    return {
        type: 'app/SET-IS-LOADING',
        payload: {
            isLoading
        }
    } as const
}
export const setIsInitialized = () => {
    return {
        type: 'app/SET-IS-INITIALIZED'
    } as const
}
