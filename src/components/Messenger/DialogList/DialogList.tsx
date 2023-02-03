import React from 'react';
import {DialogListPropsType} from "../../../Types";


const DialogList = (props: DialogListPropsType) => {
    return (
        <div>
            {props.arr.map(e => <div key={e.id}>{e.userName}</div>)}
        </div>
    );
}

export default DialogList;

