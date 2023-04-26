import  {ChangeEvent, KeyboardEvent} from "react";
import {ActionsType} from "../../Redux/ActionCreators";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";
import ReForm from "../Profile/ConnProfileReForm";
import {addMessageAC, updateMessengerInputValueAC} from "../../Redux/Reducers/MessengerReducer";







const mapStateToProps = (state: RootStateType) => {
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