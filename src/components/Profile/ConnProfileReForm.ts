import {ChangeEvent, KeyboardEvent} from "react";
import {ActionsType, addPostAC, updatePostInputValueAC} from "../../Redux/ActionCreators";
import {ReForm} from "../ReusInputButton/ReForm";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";


const mapStateToProps = (state: RootStateType) => {
    return {
        inputValue: state.profile.controlledInputPostValue
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => dispatch(updatePostInputValueAC(e.currentTarget.value)),
        onclickHandler: () => dispatch(addPostAC()),
        onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && dispatch(addPostAC())  // if (e.key==='Enter'){console.log(e.key)}
    }
}


export const ConnProfileReForm = connect(mapStateToProps, mapDispatchToProps)(ReForm)
