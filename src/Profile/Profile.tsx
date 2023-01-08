import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {OnePostType, PostsType} from "../InitialState";

type PropsTyp = {
    posts: PostsType
    addPost:(dataPost: OnePostType)=>void
}

const Profile = (props:PropsTyp) => {
    return (
        <div>
            My posts
            <MyPosts addPost={props.addPost} posts={props.posts}/>
        </div>
    );
}

export default Profile;
