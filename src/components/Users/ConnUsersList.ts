import {connect} from "react-redux";
import {StateType} from "../../Redux/Store";
import {ACTypes, setUsersAC, showMoreAC, switchSubStatusAC} from "../../Redux/Reducers/UsersReducer";
import {UsersList} from "./UsersList";
import {OneUserType} from "../../Types";


const mapStateToProps = (state: StateType) => {
    return {
        arr: state.users.users,
        pageNumbers: state.users.pageNumbers
    }
}

const mapDispatchToProps = (dispatch: (action:ACTypes)=>void) => {
    return {
        onClickHandler:(userID:number)=> dispatch(switchSubStatusAC(userID)),
        showMoreClickHandler:()=> dispatch(showMoreAC()),

        setUsers: (receivedUsersArr:OneUserType[])=> {
            dispatch(setUsersAC(receivedUsersArr))
        }
    }
}

export const ConnUsersList = connect(mapStateToProps,mapDispatchToProps)(UsersList)