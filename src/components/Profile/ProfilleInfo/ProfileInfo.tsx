import EditableTextClass from '../../EditableText/EditableText'
import {ProfileType} from "../../../Redux/Reducers/ProfileReducer";
import {ChangeEvent} from "react";

export type ProfileInfoPropsType = {
    profileData: ProfileType
    isOwner: boolean
    uploadProfilePhotoTC:(image:File)=> void
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
// export const ProfileInfo = (props: any) => {



    const onUploadHandler = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length){
            props.uploadProfilePhotoTC(e.target.files[0])
        }
    }

    if (props.profileData === null) {
        return <>Loading...</>
    }

    return (
        <>
            <EditableTextClass/>
            Name <span>{props.profileData.fullName? props.profileData.fullName: ' Ivan'}</span>
            <div><img src={props.profileData.photos ? props.profileData.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
            } alt="photo"/></div>
            {props.isOwner && <input type="file" onChange={onUploadHandler}/>}
        </>
    )


}