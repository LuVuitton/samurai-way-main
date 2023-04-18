import React from 'react';
import {ConnProfileReForm} from "./ConnProfileReForm";
import {ConnPostsList} from "./PostList/ConnPostsList";
import ConnProfile from "./ContainerProfile";



const Profile = () => {
    return (
        <div>
            <ConnProfileReForm/>
            <ConnPostsList/>
            <ConnProfile/>
        </div>
    );
}

export default Profile;
