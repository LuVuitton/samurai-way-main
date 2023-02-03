import React from "react";
import {connect} from "react-redux";
import {UsersList} from "./UsersList";
import {StateType} from "../Redux/ReduxStore";
import {switchSubStatusAC} from "../Redux/Reducers/UsersReducer";
import {ActionType} from "../Types";


const mapStateToProps = (state: StateType) => {
    return {
        arr: state.users.users
    }
}

const mapDispatchToProps = (dispatch: (action:ActionType)=>void) => {
    return {
        onClickHandler:(userID:number)=> dispatch(switchSubStatusAC(userID))
    }
}

export const ConnUsers = connect(mapStateToProps,mapDispatchToProps)(UsersList)