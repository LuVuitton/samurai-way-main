import EditableText from '../../EditableText/EditableText'
import {ProfileContacts, ProfileType} from "../../../Redux/Reducers/ProfileReducer";
import React, {ChangeEvent, ReactComponentElement} from "react";
import {ProfileEditForm} from "./ProfileEditForm/ProfileEditForm";

export type ProfileInfoPropsType = {
    profileData: ProfileType
    isOwner: boolean
    uploadProfilePhotoTC: (image: File) => void
    statusMessage: string


}


export class ProfileInfo extends React.Component<ProfileInfoPropsType, ProfileInfoStateType> {
    constructor(props: ProfileInfoPropsType) {
        super(props);

        this.state = {
            editMode: false,
        };
    }

    onUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            this.props.uploadProfilePhotoTC(e.target.files[0]);
        }
    };

    formSubmitHandler = (formData:any)=> {
        console.log(formData)
    }


    toEditModeHandler = ()=> {
        this.setState({
            editMode:true
        })
    }


    render() {
        const {profileData, isOwner, statusMessage} = this.props;
        const {editMode} = this.state;

        // проверяем что профайл дата не путой обьект
        if (!profileData.userId) {
            return <>Loading...</>;
        }

        // собираем все ключи с обьекта контактс в массив и на основе этого мапим компонент
        const mappedContacts = Object.keys(profileData.contacts).map((e) => {
            return (
                <ProfileContact
                    key={e}
                    contactTitle={e}
                    contactValue={profileData.contacts[e as keyof ProfileContacts]}
                />
            );
        });

        return (
            <>
                <div>
                    <strong>Status:</strong>
                    {isOwner
                        ? <EditableText statusMessage={statusMessage}/>
                        : (statusMessage || 'status is empty')}
                    {isOwner && <button onClick={this.toEditModeHandler}>edit</button>}
                </div>

                {editMode
                    ? <ProfileEditForm onSubmit={this.formSubmitHandler} profileData={profileData} mappedContacts={mappedContacts} onUploadHandler={this.onUploadHandler}/>
                    : <ProfileData profileData={profileData} mappedContacts={mappedContacts}/>
                }
            </>
        );
    }
}

export const ProfileData = (props: ProfileDataPropsType) => {
    return <>
        <p><strong>Name:</strong> {props.profileData.fullName}</p>
        <div>
            <img src={
                props.profileData.photos.small
                || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
            } alt="photo"/></div>
        {/*{props.isOwner && <input type="file" onChange={onUploadHandler}/>}*/}
        <p><strong>lookingForAJob:</strong> {props.profileData.lookingForAJob ? 'yes' : 'no'}</p>
        {props.profileData.lookingForAJob && (
            <p><strong>lookingForAJobDescription:</strong> {props.profileData.lookingForAJobDescription}</p>
        )}
        <div>
            <p><strong>Contact:</strong></p>
            <ul> {props.mappedContacts}</ul>
        </div>
    </>
}













export const ProfileContact = ({contactTitle, contactValue}: ProfileContactPropsType) => {
    return (
        <>
            <li><strong>{contactTitle}: </strong> {contactValue}</li>
        </>
    )
}


type ProfileDataPropsType = {
    profileData: ProfileType
    mappedContacts: ReactComponentElement<any>[]
}


type ProfileContactPropsType = {
    contactTitle: string,
    contactValue: string
}

type ProfileInfoStateType = {
    editMode: boolean;
};



//функциональный компонент
// export const ProfileInfo = (props: ProfileInfoPropsType) => {
//
//     const [editMode, setEditMode] = useState(false)
//
//
//     const onUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files?.length) {
//             props.uploadProfilePhotoTC(e.target.files[0])
//         }
//     }
//     //проверяем что профайл дата не путой обьект
//     if (!props.profileData.userId) {
//         return <>Loading...</>
//     }
//     //собираем все ключи с обьекта контактс в массив и на основе этого мапим компонент
//     const mappedContacts = Object.keys(props.profileData.contacts).map(e => {
//         return <ProfileContact key={e} contactTitle={e}
//                                contactValue={props.profileData.contacts[e as keyof ProfileContacts]}/>
//     })
//
//
//     return (
//         <>
//             <div>
//                 <strong>Status:</strong> {props.isOwner
//                 ? <EditableText statusMessage={props.statusMessage}/>
//                 : (props.statusMessage || 'status is empty')}
//             </div>
//
//             {editMode
//             ?<ProfileDataForm profileData={props.profileData} mappedContacts={mappedContacts}/>
//             :<ProfileData profileData={props.profileData} mappedContacts={mappedContacts}/>
//             }
//
//
//         </>
//     )
//
//
// }