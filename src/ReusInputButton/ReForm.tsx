import React from "react";
import {ReFormPropsType} from "../Types";

export const ReForm = (props: ReFormPropsType) => {
    return <>
        <input type={'text'} onChange={props.onChangeHandler}
               value={props.inputValue}
               onKeyPress={props.onKeyPressHandler}
        />
        <button className={''} onClick={props.onclickHandler}>ADD</button>
    </>
}