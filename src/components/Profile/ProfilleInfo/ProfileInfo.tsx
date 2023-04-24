import {ProfileType} from "../../../DAL/ProfileAPI";
import EditableTextClass from '../../EditableText/EditableText'

export type ProfileInfoPropsType = {
    userData: ProfileType | null
}


export const ProfileInfo = (props:ProfileInfoPropsType ) => {

    if(props.userData === null){
        return <>Loading...</>
    }

    return (
        <>
            <EditableTextClass />
            Name <span>{props.userData.fullName}</span>
            <div>{props.userData.photos? <img src={props.userData.photos.small} alt="photo"/>:<span>PHOTO</span>}</div>
        </>
    )



}