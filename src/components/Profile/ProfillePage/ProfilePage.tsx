import {ProfileContacts, ProfileType} from "../../../Redux/Reducers/ProfileReducer";
import React, {ChangeEvent} from "react";
import {ProfileEditor} from "./ProfileEditor/ProfileEditor";
import {ProfileDisplay} from "./ProfileDisplay/ProfileDisplay";
import {createField, InputForm} from "../../../formControls/formControls";


export class ProfilePage extends React.Component<ProfilePagePropsType, ProfilePageStateType> {

    constructor(props: ProfilePagePropsType) {
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

    formSubmitHandler = (formData: any) => {
        this.props.updateProfileDataTC(formData)
            .then(() => {
                this.setState({
                    editMode: false
                })
            })

    }

    toEditModeHandler = () => {
        this.setState({
            editMode: true
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
        const mappedContactsForDisplay = Object.keys(profileData.contacts).map((e) => {
            return (
                <ProfileContact
                    key={e}
                    contactTitle={e}
                    contactValue={profileData.contacts[e as keyof ProfileContacts]}
                    editMode={false}
                />
            );
        });

        const mappedContactsForEditor = Object.keys(profileData.contacts).map((e) => {
            return (
                <ProfileContact
                    key={e}
                    contactTitle={e}
                    contactValue={createField(e, `contacts.${e}`, [], InputForm)}
                    editMode={true}
                />
            );
        });

        return (
            <>



                {editMode
                    ? <ProfileEditor
                        onSubmit={this.formSubmitHandler}
                        profileData={profileData}
                        mappedContacts={mappedContactsForEditor}
                        onUploadHandler={this.onUploadHandler}
                        initialValues={profileData}
                    />
                    : <ProfileDisplay
                        profileData={profileData}
                        mappedContacts={mappedContactsForDisplay}
                        isOwner={isOwner}
                        statusMessage={statusMessage}
                        toEditModeHandler={this.toEditModeHandler}
                    />
                }
            </>
        );
    }
}


export const ProfileContact = ({contactTitle, contactValue, editMode}: ProfileContactPropsType) => {


    return (
        <li>
            {editMode

                ? <span>{contactValue}</span>
                : <a href={contactValue} target={'_blank'}>{contactTitle}</a>
            }
        </li>
    )

}


type ProfileContactPropsType = {
    contactTitle: string,
    contactValue: any,
    editMode: boolean
}

type ProfilePageStateType = {
    editMode: boolean;
}

export type ProfilePagePropsType = {
    profileData: ProfileType
    isOwner: boolean
    uploadProfilePhotoTC: (image: File) => void
    statusMessage: string
    updateProfileDataTC: (formData: any) => Promise<any>


}


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