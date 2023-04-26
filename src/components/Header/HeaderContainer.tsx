import React from 'react';
import {setIsLoadingAC} from '../../Redux/Reducers/appReducer';
import {logoutTC} from '../../Redux/Reducers/authReducer';
import {RootStateType} from "../../Redux/Store";
import {connect} from "react-redux";
import {Header} from "./Header";


export type HeaderContainerPropsType = {
    setIsLoadingAC: typeof setIsLoadingAC,
    isAuth: boolean
    userName: string
    isLoading: boolean
    logoutTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {



    onClickHandler = () => {
        this.props.logoutTC()
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            userName={this.props.userName}
            isLoading={this.props.isLoading}
            onClickHandler={this.onClickHandler}
        />
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        userName: state.auth.authData.login,
        isLoading: state.app.isLoading
    }
}

export default connect(mapStateToProps, {setIsLoadingAC, logoutTC})(HeaderContainer)
