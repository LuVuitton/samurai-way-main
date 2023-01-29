import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePropsType} from "../Types";


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <MyPosts store={props.store}/>
        </div>
    );
}

export default Profile;
