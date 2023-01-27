import React from 'react';
import {DialogueItemType} from "../../InitialState";

type PropsType ={
    dialogItem: DialogueItemType
}
const DialogItem = (props: PropsType) => {
    return (
        <div>
            <div>DialogItem</div>
            <div>DialogItem</div>
            <div>DialogItem</div>
            <div>DialogItem</div>
            <div>DialogItem</div>
            <div>DialogItem</div>
            <div>DialogItem</div>
        </div>
    );
}

export default DialogItem;
