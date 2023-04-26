import {ActionsType} from "../ActionCreators";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";
import {checkMETC} from "./authReducer";

export type AppStateType = typeof initAppState

const initAppState = {
    isLoading: false,
    isInitialized: false
}

export const appReducer = (state: AppStateType = initAppState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case "users/SET-IS-LOADING":
            return {...state, isLoading: action.payload.isLoading}
        case "app/SET-IS-INITIALIZED":
            return {...state, isInitialized: true}

        default:
            return {...state}
    }

}


export const initializeAppTC = () => (dispatch: AppDispatchType) => {
// диспатч вернет то что вернет санка, поэтомувнутри санки добавил ретерн,
// после, диспатчим инитиализейтд на тру через промис ол, для того что бы можно было добовлять другие диспатчи,
    const dispatchRes = dispatch(checkMETC())

    Promise.all([dispatchRes])
        .then(()=> dispatch(setIsInitialized()))

}


export const setIsLoadingAC = (isLoading: boolean) => {
    return {
        type: 'users/SET-IS-LOADING',
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
