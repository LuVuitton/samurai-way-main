import React from 'react';
import DialogList from "./DialogList/DialogList";
import MessagesList from "./MessagesList/MessagesList";
import sMessenger from './Messenger.module.css'
import {MessengerPropsType} from "../Types";
import {ConMessengerReForm} from "../ReusInputButton/ConMessengerReForm";


const Messenger = (props: MessengerPropsType) => {

    return (
        <div className={sMessenger.dialogues}>

            <DialogList arr={props.store.getState().messenger.dialoguesArr}/>
            <MessagesList arr={props.store.getState().messenger.messagesArr}/>


            <ConMessengerReForm store={props.store}/>
        </div>
    );
}

export default Messenger;

