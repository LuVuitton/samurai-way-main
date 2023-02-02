import React from 'react';
import {ConnProfileReForm} from "./ConnProfileReForm";
import {ConnPostsList} from "./PostList/ConnPostsList";


const Profile = () => {
    return (
        <div>
            <ConnProfileReForm />
            <ConnPostsList />
        </div>
    );
}

export default Profile;
