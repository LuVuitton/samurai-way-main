import React from 'react';
import {OneDialogueType} from "../../../Redux/Reducers/MessengerReducer";


const DialogList = (props: {arr: OneDialogueType[]}) => {
    return (
        <div>
            {props.arr.map(e => <div key={e.id}>{e.userName}</div>)}
        </div>
    );
}

export default DialogList;

