import React from 'react';
import {MessagesListPropsType} from "../../Types";


export const MessagesList = (props: MessagesListPropsType) => {
    return (
        <div>
            {props.arr.map(e => <div key={e.id}>{e.text}</div>)}
        </div>
    );
}
