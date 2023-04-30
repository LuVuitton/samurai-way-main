import React, {ReactComponentElement} from "react";
import {ProfileType} from "../../../../Redux/Reducers/ProfileReducer";

export const ProfileDisplay = (props: ProfileDisplayPropsType) => {
    return <>
        <div><strong>Full name:</strong> {props.profileData.fullName}</div>
        <div>
            <img src={
                props.profileData.photos.small
                || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
            } alt="photo"/></div>
        <p><strong>Looking for a job:</strong> {props.profileData.lookingForAJob ? 'yes' : 'no'}</p>
        {props.profileData.lookingForAJob && (
            <p><strong>lookingForAJobDescription:</strong> {props.profileData.lookingForAJobDescription}</p>
        )}
        <div>
            <p><strong>Contact:</strong></p>
            <ul> {props.mappedContacts}</ul>
        </div>
    </>
}







type ProfileDisplayPropsType = {
    profileData: ProfileType
    mappedContacts: ReactComponentElement<any>[]
}