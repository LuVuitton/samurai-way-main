import {ActionsType} from "../ActionCreators";

export type AppStateType = typeof initAppState

const initAppState = {
    isLoading: false,
    isInitialized: false
}

export const appReducer = (state: AppStateType = initAppState, action: ActionsType):AppStateType => {
    switch (action.type)  {
        case "SET-IS-LOADING":
            return {...state, isLoading: action.payload.isLoading}

        default:
            return {...state}
    }

}


export const setIsLoadingAC = (isLoading:boolean)=> {
    return {
        type: 'SET-IS-LOADING',
        payload: {
            isLoading
        }
    } as const
}