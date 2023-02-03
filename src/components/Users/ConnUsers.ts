import {connect} from "react-redux";
import {UsersList} from "./UsersList";
import {StateType} from "../../Redux/Store";
import {switchSubStatusAC, switchSubStatusACType} from "../../Redux/Reducers/UsersReducer";


const mapStateToProps = (state: StateType) => {
    return {
        arr: state.users.users
    }
}

const mapDispatchToProps = (dispatch: (action:switchSubStatusACType)=>void) => {
    return {
        onClickHandler:(userID:number)=> dispatch(switchSubStatusAC(userID))
    }
}

export const ConnUsers = connect(mapStateToProps,mapDispatchToProps)(UsersList)