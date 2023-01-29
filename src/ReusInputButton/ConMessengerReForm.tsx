import React, {ChangeEvent, KeyboardEvent} from "react";
import {addMessageAC, updateMessengerInputValueAC} from "../Redux/ActionCreators";
import {ReForm} from "./ReForm";
import {ContainerType} from "../Types";

export const ConMessengerReForm = (props: ContainerType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.store.dispatch(updateMessengerInputValueAC(e.currentTarget.value))
    }
    const onclickHandler = () => {
        props.store.dispatch(addMessageAC())
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' &&                                                      // if (e.key==='Enter'){console.log(e.key)}
        props.store.dispatch(addMessageAC())
    }


    return <ReForm
        onChangeHandler={onChangeHandler}
        onclickHandler={onclickHandler}
        onKeyPressHandler={onKeyPressHandler}
        inputValue={props.store.getState().messenger.controlledInputMessengerValue}
    />
}
