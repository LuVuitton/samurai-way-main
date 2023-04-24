import {ChangeEvent, KeyboardEvent} from "react";
import {ActionsType, addPostAC, updatePostInputValueAC} from "../../Redux/ActionCreators";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";
import {ReFormPropsType} from "../../Types";
import sReForm from '../ReusInputButton/ReForm.module.css'

const ReForm = (props: ReFormPropsType) => {
    return <>
        <input type={'text'} onChange={props.onChangeHandler}
               value={props.inputValue}
               onKeyPress={props.onKeyPressHandler}
        />
        <button className={sReForm.reButton} onClick={props.onclickHandler}>ADD</button>
    </>
}


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


export default connect(mapStateToProps, mapDispatchToProps)(ReForm)
