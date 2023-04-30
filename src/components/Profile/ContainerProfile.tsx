import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";
import {ProfileInfo} from "./ProfilleInfo/ProfileInfo";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProfileStatusTC, setUserProfileTC, uploadProfilePhotoTC} from "../../Redux/Reducers/ProfileReducer";
import { compose } from 'redux';
import {withAuthRedirectHOC} from "../../customHOKs/wihtAuthRedirectHOK";




class ProfileClass extends React.Component<PropsType, any> {

    refreshProfile = ()=> {
        let userID = Number(this.props.match.params.userID)
        if (!userID) {
            userID = this.props.myID
        }
        this.props.setUserProfileTC(userID)
        this.props.getProfileStatusTC(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>) {
        if(prevProps.match.params.userID !== this.props.match.params.userID) {
            this.refreshProfile()
        }
    }



    render() {
        return (
            // !! приводим к булевому значению юзер id  из урла, если там пусто то на странице ее владелец
            <ProfileInfo
                profileData={this.props.profile}
                isOwner={!this.props.match.params.userID}
                uploadProfilePhotoTC={this.props.uploadProfilePhotoTC}
                statusMessage={this.props.statusMessage}
            />
        )
    }
}

// обернули хоком визроутер потом то что он вернул обернули коннектом, по дрооге забарли url  и часть стейта с диспатчами
// const WithRouterHOK = withRouter(ProfileClass)
// const withAuthRedirect = withAuthRedirectHOC(WithRouterHOK)
// export default connect(mapStateToProps, {setUserProfileTC})(withAuthRedirect);
const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profile.currentUser,
        myID: state.auth.myID,
        statusMessage: state.profile.statusMessage
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileTC,getProfileStatusTC,uploadProfilePhotoTC}),
    withRouter,
    withAuthRedirectHOC,
)(ProfileClass)







export type PathParamsType = {
    userID?: string // для params типизируем то что ождается в ВизРоутере // роутер отдает стрку поэтому вот так
}
export type MapStatePropsType = ReturnType<typeof mapStateToProps>
export type MapDispatchPropsType = {
    setUserProfileTC: (userID: number) => void,
    getProfileStatusTC:(userID:number)=> void
    uploadProfilePhotoTC:(image:File)=>void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

