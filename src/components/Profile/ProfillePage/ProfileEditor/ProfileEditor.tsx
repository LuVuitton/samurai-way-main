import {createField, InputForm, TextAreaForm} from "../../../../formControls/formControls";
import {reduxForm} from "redux-form";
import React from "react";


const ProfileEdit = (props: any) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div><strong>Full name:</strong> {createField('Full Name', 'fullName', [], InputForm)}</div>

            <div>
                <img src={
                    props.profileData.photos.small
                    || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
                } alt="photo"/>
            </div>
            <input type="file" onChange={props.onUploadHandler}/>

            <div><strong>Looking for a
                job:</strong> {createField('', 'lookingForAJob', [], InputForm, {type: 'checkbox'})}
            </div>
            <div>
                <strong>Looking for a job
                    description:</strong> {createField('Description', 'lookingForAJobDescription', [], TextAreaForm)}
            </div>
            <div>
                <strong>About Me:</strong> {createField('About Me', 'aboutMe', [], TextAreaForm)}
            </div>

            <div>
                <p><strong>Contact:</strong></p>
                <ul> {props.mappedContacts}</ul>
            </div>

            <button>SAVE</button>
        </form>
    </>
}


export const ProfileEditor = reduxForm<any, any>({
    form: 'ProfileEditor'
})(ProfileEdit)


// type ProfileEditFormPropsType = {
//     profileData: ProfileType
//     mappedContacts: ReactComponentElement<any>[]
//     onUploadHandler: (e: ChangeEvent<HTMLInputElement>) => void
//     handleSubmit: () => void
// }