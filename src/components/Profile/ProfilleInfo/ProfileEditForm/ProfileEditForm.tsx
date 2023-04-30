import {createField, InputForm, TextAreaForm} from "../../../../formControls/formControls";
import {reduxForm} from "redux-form";
import React from "react";

const ProfileEdit = (props: any) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div><strong>Name:</strong> {createField('name', 'name', [], InputForm)}</div>

            <div>
                <img src={
                    props.profileData.photos.small
                    || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
                } alt="photo"/>
            </div>
            <input type="file" onChange={props.onUploadHandler}/>

            <div><strong>lookingForAJob:</strong> {createField('', 'lookingForAJob', [], InputForm, {type: 'checkbox'})}
            </div>
            <div>
                <strong>lookingForAJobDescription:</strong> {createField('lookingForAJobDescription', 'lookingForAJobDescription', [], TextAreaForm)}
            </div>

            <div>
                <p><strong>Contact:</strong></p>
                <ul> {props.mappedContacts}</ul>
            </div>

            <button>SAVE</button>
        </form>
    </>
}


export const ProfileEditForm = reduxForm<any,any>({
    form: 'ProfileEditForm'
})(ProfileEdit)


// type ProfileEditFormPropsType = {
//     profileData: ProfileType
//     mappedContacts: ReactComponentElement<any>[]
//     onUploadHandler: (e: ChangeEvent<HTMLInputElement>) => void
//     handleSubmit: () => void
// }