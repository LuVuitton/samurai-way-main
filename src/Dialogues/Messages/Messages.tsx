import React from 'react';
import {MessagesType} from "../../State";

type MessagesPropsType = {
    messages: MessagesType
}
const Messages = (props: MessagesPropsType) => {
    return (
        <div>
            {props.messages.map(e => <div key={e.id}>{e.text}</div>)}
        </div>
    );
}


export default Messages;
