import React, {ChangeEvent, KeyboardEvent} from "react";
import {addPostAC, updatePostInputValueAC} from "../Redux/ActionCreators";
import {ReForm} from "../ReusInputButton/ReForm";
import {ActionType} from "../Types";
import {connect} from "react-redux";
import {StateType} from "../Redux/ReduxStore";


const mapStateToProps = (state: StateType) => {
    return {
        inputValue: state.profile.controlledInputPostValue
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => dispatch(updatePostInputValueAC(e.currentTarget.value)),
        onclickHandler: () => dispatch(addPostAC()),
        onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && dispatch(addPostAC())  // if (e.key==='Enter'){console.log(e.key)}
    }
}


export const ConnProfileReForm = connect(mapStateToProps, mapDispatchToProps)(ReForm)
