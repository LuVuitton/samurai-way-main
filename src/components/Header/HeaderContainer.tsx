import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import axios from "axios";
import {authMeAC, GeneralResponseType, MeDataType} from "../../Redux/Reducers/authReducer";
import {StateType} from "../../Redux/Store";


export type HeaderContainerPropsType = {
    authMeAC: typeof authMeAC,
    isAuth: boolean
    userName:string
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {

    componentDidMount() {
        axios.get<GeneralResponseType<MeDataType>>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(r => {
                if (r.data.resultCode === 0) {
                    this.props.authMeAC(r.data.data)
                }
            })
    }


    render() {
        return (
            <Header isAuth={this.props.isAuth} userName={this.props.userName}/>
        );
    }


}


const mapStateToProps = (state: StateType) => ({isAuth: state.auth.isAuth , userName:state.auth.authData.login})


export default connect(mapStateToProps, {authMeAC})(HeaderContainer)
