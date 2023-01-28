import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePropsType} from "../Types";


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
