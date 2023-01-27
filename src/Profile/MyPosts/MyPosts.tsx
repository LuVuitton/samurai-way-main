import React, {ChangeEvent, LegacyRef} from 'react';
import Post from "./Post/Post";
import {AddPostType, OnePostType, updateInputValueType} from "../../State";

type MyPostsPropsType = {
    profile: {
        posts: OnePostType[],
        controlledInputPostValue:string
    }
    addPost: AddPostType,
    updateInputValue:updateInputValueType
}

const MyPosts = (props: MyPostsPropsType) => {

    // const newPostElement: LegacyRef<HTMLInputElement> = React.createRef();

    const addButtonHandler = () => {
      props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateInputValue(e.currentTarget.value)
    }


    const mapPost = props.profile.posts.map((e) => {
        return <Post key={e.id} text={e.text} time={e.time}/>
    })

    return (
        <>
            <input type={'text'} onChange={onChangeHandler} value={props.profile.controlledInputPostValue}/>
            <button onClick={addButtonHandler}>ADD</button>
            {mapPost}
        </>
    );
}

export default MyPosts;
