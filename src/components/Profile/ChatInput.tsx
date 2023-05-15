import {ChangeEvent, KeyboardEvent} from "react";
import {ActionsType} from "../../Redux/ActionCreators";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";
import sReForm from '../ReusInputButton/ReForm.module.css'
import {addPostAC, updatePostInputValueAC} from "../../Redux/Reducers/ProfileReducer";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import s from './ChatInput.module.css'


const ChatInput = (props: ReFormPropsType) => {
    return (
        <div className={s.mainWrapper}>
            <FloatingLabel controlId="floatingTextarea2" label="Add post"  className={s.inputWrapper}>
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '65px'}}
                    onChange={props.onChangeHandler}
                    value={props.inputValue}
                    onKeyPress={props.onKeyPressHandler}
                />
            </FloatingLabel>
            <Button variant="light" className={sReForm.reButton} onClick={props.onclickHandler}>ADD</Button>
        </div>
    )
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
        onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                dispatch(addPostAC())
                e.currentTarget.blur(); // Снятие фокуса с инпута
            }
        }  // if (e.key==='Enter'){console.log(e.key)}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatInput)


export type ReFormPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    onclickHandler: () => void
    inputValue: string

}
