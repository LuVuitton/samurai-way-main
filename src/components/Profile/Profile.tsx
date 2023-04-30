import React from 'react';
import ChatInput from "./ChatInput";
import {ConnPostsList} from "./PostList/ConnPostsList";
import ProfileClass from "./ContainerProfile";





const Profile = () => {
    return (
        <div>
            <ProfileClass/>
            <ConnPostsList/>
            <ChatInput/>
        </div>
    );
}

export default Profile;
