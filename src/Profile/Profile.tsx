import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {AddPostType, OnePostType, updateInputValueType,} from "../State";

type PropsTyp = {
    profile: {
    posts: OnePostType[],
        controlledInputPostValue:string
    }
    addPost: AddPostType,
    updateInputValue:updateInputValueType
}

const Profile = (props: PropsTyp) => {
    return (
        <div>
            <MyPosts addPost={props.addPost} profile={props.profile} updateInputValue={props.updateInputValue}/>
        </div>
    );
}

export default Profile;
