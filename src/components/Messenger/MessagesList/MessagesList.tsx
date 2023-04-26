import React from 'react';
import { OneMessageType} from "../../../Redux/Reducers/MessengerReducer";


export const MessagesList = (props: {arr: OneMessageType[]}) => {
    return (
        <div>
            {props.arr.map(e => <div key={e.id}>{e.text}</div>)}
        </div>
    );
}
