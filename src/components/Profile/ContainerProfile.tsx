import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";
import {ProfileInfo} from "./ProfilleInfo/ProfileInfo";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProfileStatusTC, setUserProfileTC} from "../../Redux/Reducers/ProfileReducer";
import { compose } from 'redux';
import {withAuthRedirectHOC} from "../../customHOKs/wihtAuthRedirectHOK";




class ProfileClass extends React.Component<PropsType, any> {


    componentDidMount() {
        let userID = Number(this.props.match.params.userID)
        if (!userID) {
            userID = this.props.myID
        }
        this.props.setUserProfileTC(userID)
        this.props.getProfileStatusTC(userID)

    }

    render() {
        return (
            <ProfileInfo userData={this.props.profile} />
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
        myID: state.auth.myID
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileTC,getProfileStatusTC}),
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
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

