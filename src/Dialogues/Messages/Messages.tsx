import React from 'react';
import {MessagesPropsType} from "../../Types";


const Messages = (props: MessagesPropsType) => {
    return (
        <div>
            {props.messages.map(e => <div key={e.id}>{e.text}</div>)}
        </div>
    );
}


export default Messages;
