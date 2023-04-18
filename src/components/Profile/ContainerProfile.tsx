import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ActionCreators";
import {StateType} from "../../Redux/Store";
import {ProfileInfo} from "./ProfilleInfo/ProfileInfo";
import { withRouter } from 'react-router-dom';


class ConnProfile extends React.Component<any, any> {

    componentDidMount() {
        console.log(this.props)
        let userID = this.props.match.params.userID
        if(!userID){
            userID=2
        }
        console.log(userID)
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
const mapStateToProps = (state: StateType) => {
    return {
        profile: state.profile.currentUser
    }
}

//обернули хоком визроутер потом то что он вернул обернули коннектом, по дрооге забарли url  и часть стейта с диспатчами
const WithURLContainerComponent = withRouter(ConnProfile)
export default connect(mapStateToProps, {setUserProfile})(WithURLContainerComponent);

