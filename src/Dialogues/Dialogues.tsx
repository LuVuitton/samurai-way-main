import React, {ChangeEvent} from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {addMessageAC, updateMessengerInputValueAC} from "../Redux/ActionCreators";
import sDialogues from './Dialogues.module.css'
import {DialoguesPropsType} from "../Types";


const Dialogues = (props: DialoguesPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateMessengerInputValueAC(e.currentTarget.value))
    }
    const onclickHandler = () => {
        props.dispatch(addMessageAC())
    }

    return (
        <div className={sDialogues.dialogues}>
            <DialogItem dialoguesArr={props.state.messenger.dialoguesArr}/>
            <Messages messagesArr={props.state.messenger.messagesArr}/>
            <input type={'text'} onChange={onChangeHandler}
                   value={props.state.messenger.controlledInputMessengerValue}/>
            <button className={sDialogues.buttonAdd} onClick={onclickHandler}>ADD</button>
        </div>
    );
}

export default Dialogues;
