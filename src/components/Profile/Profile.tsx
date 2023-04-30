import React from 'react';
import ConnProfileReForm from "./ConnProfileReForm";
import {ConnPostsList} from "./PostList/ConnPostsList";
import ProfileClass from "./ContainerProfile";





const Profile = () => {
    return (
        <div>
            <ProfileClass/>
            <ConnPostsList/>
            <ConnProfileReForm/>
        </div>
    );
}

export default Profile;
