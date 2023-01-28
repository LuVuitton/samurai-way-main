import React from 'react';
import {DialogItemPropsType} from "../../Types";


const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div>
            {props.dialogItem.map(e=> <div key={e.id}>{e.userName}</div>)}
        </div>
    );
}

export default DialogItem;
