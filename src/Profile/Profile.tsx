import React from 'react';
import PostsList from "./PostList/PostsList";
import {ProfilePropsType} from "../Types";
import {ConProfileReForm} from "../ReusInputButton/ConProfileReForm";


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ConProfileReForm store={props.store}/>
            <PostsList arr={props.store.getState().profile.postsArr}/>
        </div>
    );
}

export default Profile;
