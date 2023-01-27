import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {MessengerType} from "../State";
import sDialogues from './Dialogues.module.css'

type PropsType = {
    messenger:MessengerType
}
const Dialogues = (props:PropsType) => {
    return (
        <div className={sDialogues.dialogues}>
            <DialogItem dialogItem={props.messenger.dialogueItem} />
            <Messages messages={props.messenger.messages}/>
        </div>
    );
}

export default Dialogues;
