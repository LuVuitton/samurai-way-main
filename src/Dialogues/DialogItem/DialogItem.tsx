import React from 'react';
import {DialogueItemType} from "../../State";

type DialogItemPropsType ={
    dialogItem: DialogueItemType
}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div>
            {props.dialogItem.map(e=> <div key={e.id}>{e.userName}</div>)}
        </div>
    );
}

export default DialogItem;
