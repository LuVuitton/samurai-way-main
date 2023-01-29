import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {addPostAC, updatePostInputValueAC} from "../../Redux/ActionCreators";
import {MyPostsPropsType} from "../../Types";


const MyPosts = (props: MyPostsPropsType) => {

    const addButtonHandler = () => {
        props.dispatch(addPostAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updatePostInputValueAC(e.currentTarget.value))
    }


    const mapPost = props.state.profile.postsArr.map((e) => {
        return <Post key={e.id} text={e.text} time={e.time}/>
    })

    return (
        <>
            <input type={'text'} onChange={onChangeHandler} value={props.state.profile.controlledInputPostValue}/>
            <button onClick={addButtonHandler}>ADD</button>
            {mapPost}
        </>
    );
}

export default MyPosts;
