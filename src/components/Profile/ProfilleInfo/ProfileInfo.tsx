export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type ProfileInfoPropsType = {
    userData: UserProfileType
}


export const ProfileInfo = (props:ProfileInfoPropsType ) => {

    if(props.userData === null){
        return <>Loading...</>
    }

    return (
        <>
            Name <span>{props.userData.fullName}</span>
            <div>{props.userData.photos? <img src={props.userData.photos.small} alt="photo"/>:<span>PHOTO</span>}</div>
        </>
    )



}