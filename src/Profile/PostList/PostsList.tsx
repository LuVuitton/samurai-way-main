import React from 'react';
import {PostsListPropsType} from "../../Types";



const PostsList = (props: PostsListPropsType) => {

    return (
        <div>
            {props.arr.map((e) => <div key={e.id}>  {e.text} {e.time}</div>)}
        </div>
    );
}

export default PostsList;
