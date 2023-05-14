import {CheckForm, createField, InputForm, TextAreaForm} from "../../../../formControls/formControls";
import {reduxForm} from "redux-form";
import React from "react";
import Button from 'react-bootstrap/Button';


const ProfileEdit = (props: any) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <img src={
                    props.profileData.photos.small
                    || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
                } alt="photo"/>
            </div>
            <input type="file" onChange={props.onUploadHandler}/>
            <div>{createField('Full Name', 'fullName', [], InputForm)}</div>


            <div>{createField('', 'lookingForAJob', [], CheckForm, {label: 'Looking for a job'})}
            </div>
            <div>
                {createField('Description', 'lookingForAJobDescription', [], TextAreaForm, {label: 'Looking for a job description'})}
            </div>
            <div>
                {createField('About Me', 'aboutMe', [], TextAreaForm, {label: 'About ME'})}
            </div>

            <div>
                <p><strong>Contact:</strong></p>
                <ul> {props.mappedContacts}</ul>
            </div>

            <Button variant="light" type="submit">
                save
            </Button>
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