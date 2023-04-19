import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";
import {
    clearUsersState,
    setUsersAC,
    setUsersAreLoading,
    showMoreAC,
    switchSubStatusAC
} from "../../Redux/Reducers/UsersReducer";
import {UsersClassContainer} from "./UsersClassContainer";
import {setIsLoadingAC} from "../../Redux/Reducers/appReducer";


const mapStateToProps = (state: RootStateType) => {
    return {
        pageNumbers: state.users.pageNumbers,
        arr: state.users.users,
        totalUsers: state.users.totalUsers,
        usersReceivedStatus: state.users.usersReceivedStatus,
        isLoading: state.app.isLoading,
        usersAreLoading: state.users.usersAreLoading
    }
}


export const ConnUsersList =
    connect(mapStateToProps,
        {switchSubStatusAC,showMoreAC,
            setUsersAC, clearUsersState ,setIsLoadingAC, setUsersAreLoading})(UsersClassContainer)



// const mapDispatchToProps = (dispatch: (action: ACTypes) => void) => {
//     return {
//         onClickHandler: (userID: number) => dispatch(switchSubStatusAC(userID)),
//         showMoreForCC: () => dispatch(showMoreAC()),
//         setUsers: (receivedUsersArr: OneUserType[], totalUsers: number) => {
//             dispatch(setUsersAC(receivedUsersArr, totalUsers))
//         }
//     }
// }

// на случай когда запефакторим мапДиспатчТуПропс
// в коннекте не просто одна 'follow', а  связка "ключ: значение" ' follow: follow' ,
// причем 2ой фоллоу - это импортированая ссылка на функцию в редьюсере. В итоге,  в коннекте существует обьект вида:
// {
// follow: follow = (userId) => ({ type: FOLLOW, userId })
// unfollow: unfollow = (userId) => ({ type: UNFOLLOW, userId })

