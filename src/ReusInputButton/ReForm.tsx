import React from "react";
import {ReFormPropsType} from "../Types";
import sReForm from './ReForm.module.css'

export const ReForm = (props: ReFormPropsType) => {
    return <>
        <input type={'text'} onChange={props.onChangeHandler}
               value={props.inputValue}
               onKeyPress={props.onKeyPressHandler}
        />
        <button className={sReForm.reButton} onClick={props.onclickHandler}>ADD</button>
    </>
}