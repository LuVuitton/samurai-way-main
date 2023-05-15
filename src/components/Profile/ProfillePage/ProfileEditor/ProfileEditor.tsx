import {CheckForm, createField, InputForm, TextAreaForm} from "../../../../formControls/formControls";
import {reduxForm} from "redux-form";
import React from "react";
import Button from 'react-bootstrap/Button';
import s from './ProfileEditor.module.css'
import Form from 'react-bootstrap/Form';



const ProfileEdit = (props: any) => {
    return <div className={s.mainWrapper}>
        <form onSubmit={props.handleSubmit}>
            <div>
                <img src={
                    props.profileData.photos.small
                    || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
                } alt="photo"/>
            </div>
            <div className={s.item}>
                {/*<input type="file" />*/}
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>change photo</Form.Label>
                    <Form.Control type="file" onChange={props.onUploadHandler} style={{maxWidth:'300px'}}/>
                </Form.Group>
            </div>
            <div className={s.item}>
                {createField('Full Name', 'fullName', [], InputForm)}
            </div>
            <div className={s.item}>
                {createField('', 'lookingForAJob', [], CheckForm, {label: 'Looking for a job'})}
            </div>
            <div className={s.item}>
                {createField('Description', 'lookingForAJobDescription', [], TextAreaForm, {label: 'Looking for a job description'})}
            </div>
            <div className={s.item}>
                {createField('About Me', 'aboutMe', [], TextAreaForm, {label: 'About ME'})}
            </div>

            <div>
                <p><strong>Contact:</strong></p>
                <ul> {props.mappedContacts}</ul>
            </div>

            <Button variant="outline-primary" type="submit">
                save
            </Button>
        </form>
    </div>
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