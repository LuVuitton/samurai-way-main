import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ActionCreators";
import {RootStateType} from "../../Redux/Store";
import {ProfileInfo} from "./ProfilleInfo/ProfileInfo";
import { withRouter } from 'react-router-dom';


class ConnProfile extends React.Component<any, any> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID){
            userID=2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(r => {
                this.props.setUserProfile(r.data)
            })
    }

    render() {
        return (
            <ProfileInfo userData ={this.props.profile}/>
        )
    }
}


////////////////////////////////////// внизу коннект для который возвращает контейнер сверху
const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profile.currentUser
    }
}

//обернули хоком визроутер потом то что он вернул обернули коннектом, по дрооге забарли url  и часть стейта с диспатчами
const WithURLContainerComponent = withRouter(ConnProfile)
export default connect(mapStateToProps, {setUserProfile})(WithURLContainerComponent);

