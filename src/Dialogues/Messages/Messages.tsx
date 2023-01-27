import React from 'react';
import {MessagesType} from "../../InitialState";

type PropsType = {
    messages: MessagesType
}
const Messages = (props: PropsType) => {
    return (<div>
            <div>
                Messages
            </div>
            <div>
                Messages
            </div>
            <div>
                Messages
            </div>
            <div>
                Messages
            </div>
            <div>
                Messages
            </div>
            <div>
                Messages
            </div>
        </div>
    );
}

export default Messages;
