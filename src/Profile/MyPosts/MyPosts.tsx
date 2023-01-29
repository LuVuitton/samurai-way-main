import React from 'react';
import Post from "./Post/Post";
import {MyPostsPropsType} from "../../Types";
import {ConProfileReForm} from "../../ReusInputButton/ConProfileReForm";


const MyPosts = (props: MyPostsPropsType) => {




    const mapPost = props.store.getState().profile.postsArr.map((e) => {
        return <Post key={e.id} text={e.text} time={e.time}/>
    })

    return (
        <>
            <ConProfileReForm store={props.store}/>
            {mapPost}
        </>
    );
}

export default MyPosts;
