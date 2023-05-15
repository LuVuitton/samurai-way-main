import Table from "react-bootstrap/Table";
import EditableText from "../../../../EditableText/EditableText";
import {ProfileType} from "../../../../../Redux/Reducers/ProfileReducer";
import React from "react";


export const ProfileInfo = ({isOwner, statusMessage, profileData}: ProfileInfoPropsType) => {
    return (
        <>
        <Table striped="columns" >
            <tbody>
            <tr>
                <td>Status:</td>
                <td>{isOwner
                    ? <EditableText statusMessage={statusMessage}/>
                    : (statusMessage || 'status is empty')}</td>
            </tr>
            <tr>
                <td>Full name:</td>
                <td>{profileData.fullName}</td>
            </tr>
            <tr>
                <td>Description:</td>
                <td> {profileData.lookingForAJobDescription}</td>
            </tr>
            <tr>
                <td>Job hunting:</td>
                <td>{profileData.lookingForAJob ? 'yes' : 'no'}</td>
            </tr>
            </tbody>

        </Table>
        </>
    );
}


type ProfileInfoPropsType = {
    isOwner: boolean
    statusMessage: string
    profileData: ProfileType
}