import React, {ChangeEvent, KeyboardEvent} from "react";
import {addPostAC, updatePostInputValueAC} from "../Redux/ActionCreators";
import {ReForm} from "./ReForm";
import {ContainerType} from "../Types";

export const ConProfileReForm = (props: ContainerType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.store.dispatch(updatePostInputValueAC(e.currentTarget.value))
    }
    const onclickHandler = () => {
        props.store.dispatch(addPostAC())
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' &&                                            // if (e.key==='Enter'){console.log(e.key)}
        props.store.dispatch(addPostAC())
    }

    return <ReForm
        onChangeHandler={onChangeHandler}
        onclickHandler={onclickHandler}
        onKeyPressHandler={onKeyPressHandler}
        inputValue={props.store.getState().profile.controlledInputPostValue}
    />
}
