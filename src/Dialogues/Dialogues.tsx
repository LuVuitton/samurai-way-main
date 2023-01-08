import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {MessengerType} from "../InitialState";

type PropsType = {
    messenger:MessengerType
}
const Dialogues = (props:PropsType) => {
    return (
        <div>
            <DialogItem dialogItem={props.messenger.dialogueItem} />
            <Messages messages={props.messenger.messages}/>
        </div>
    );
}

export default Dialogues;
