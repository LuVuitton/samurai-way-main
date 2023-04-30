import {authMeAC, logoutAC} from "./Reducers/authReducer";
import {setIsInitialized, setIsLoadingAC} from "./Reducers/appReducer";
import {
    addPostAC, setProfilePhotoAC,
    setStatusMessageAC,
    setUserProfile,
    updatePostInputValueAC
} from "./Reducers/ProfileReducer";
import {
    clearUsersState,
    followAC,
    setUsersAC,
    setUsersAreLoading,
    showMoreAC,
    unfollowAC
} from "./Reducers/UsersReducer";
import {addMessageAC, updateMessengerInputValueAC} from "./Reducers/MessengerReducer";

//
export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostInputValueAC>
    | ReturnType<typeof updateMessengerInputValueAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof showMoreAC>
    | ReturnType<typeof authMeAC>
    | ReturnType<typeof clearUsersState>
    | ReturnType<typeof setIsLoadingAC>
    | ReturnType<typeof setUsersAreLoading>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setStatusMessageAC>
    | ReturnType<typeof logoutAC>
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setProfilePhotoAC>
