import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import sDialogues from './Dialogues.module.css'
import {DialoguesPropsType} from "../Types";
import {ConMessengerReForm} from "../ReusInputButton/ConMessengerReForm";


const Dialogues = (props: DialoguesPropsType) => {

    return (
        <div className={sDialogues.dialogues}>
            <DialogItem dialoguesArr={props.store.getState().messenger.dialoguesArr}/>
            <Messages messagesArr={props.store.getState().messenger.messagesArr}/>


            <ConMessengerReForm store={props.store}/>
        </div>
    );
}

export default Dialogues;

