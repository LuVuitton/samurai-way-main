import React from 'react';
import ConnProfileReForm from "./ConnProfileReForm";
import {ConnPostsList} from "./PostList/ConnPostsList";
import ProfileClass from "./ContainerProfile";





const Profile = () => {
    return (
        <div>
            <ConnProfileReForm/>
            <ConnPostsList/>
            <ProfileClass/>
        </div>
    );
}

export default Profile;
