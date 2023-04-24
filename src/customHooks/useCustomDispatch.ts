

import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "../Redux/Store";
import {AnyAction} from "redux";

export type AppDispatchType = ThunkDispatch<RootStateType, any, AnyAction>