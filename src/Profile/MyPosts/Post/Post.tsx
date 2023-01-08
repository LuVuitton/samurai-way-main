import React from 'react';

type PropsType = {
    text: string
    time: string
}
const Post = (props: PropsType) => {
    return (
        <div>
            {props.text} {props.time}
        </div>
    );
}

export default Post;
