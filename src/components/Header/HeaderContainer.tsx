import React from 'react';
import { setIsLoadingAC } from '../../Redux/Reducers/appReducer';
import { authMeAC } from '../../Redux/Reducers/authReducer';
import {authAPI} from "../../DAL/AuthAPI";
import {RootStateType} from "../../Redux/Store";
import {connect} from "react-redux";
import {Header} from "./Header";



export type HeaderContainerPropsType = {
    authMeAC: typeof authMeAC,
    setIsLoadingAC: typeof setIsLoadingAC,
    isAuth: boolean
    userName: string
    isLoading:boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {

    componentDidMount() {
        this.props.setIsLoadingAC(true)
        authAPI.checkME()
            .then(r => {
                if (r.resultCode === 0) {
                    this.props.authMeAC(r.data)
                }
            })
            .finally(() => {
                this.props.setIsLoadingAC(false)
            })
    }


    render() {
        return (
            <Header isAuth={this.props.isAuth} userName={this.props.userName} isLoading={this.props.isLoading}/>
        );
    }


}


const mapStateToProps = (state: RootStateType) => {
     return {
         isAuth: state.auth.isAuth,
         userName: state.auth.authData.login,
         isLoading:state.app.isLoading
     }
}


export default connect(mapStateToProps, {authMeAC, setIsLoadingAC})(HeaderContainer)
