import  {ChangeEvent, KeyboardEvent} from "react";
import {ActionsType, addMessageAC, updateMessengerInputValueAC} from "../../Redux/ActionCreators";
import {connect} from "react-redux";
import {StateType} from "../../Redux/Store";
import {ReForm} from "../ReusInputButton/ReForm";

const mapStateToProps = (state: StateType) => {
    return {
        inputValue: state.messenger.controlledInputMessengerValue
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => dispatch(updateMessengerInputValueAC(e.currentTarget.value)),
        onclickHandler: () => dispatch(addMessageAC()),
        onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && dispatch(addMessageAC())   // if (e.key==='Enter'){console.log(e.key)}
    }
}


export const ConnMessengerReForm = connect(mapStateToProps, mapDispatchToProps)(ReForm)