import { RootStateType } from "../Redux/Store";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import React from "react";

const mapStateToPropsForRedirect = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export const withAuthRedirectHOC = (Component: React.ComponentType<any>):React.ComponentType<any> => {

    class RedirectComponent extends React.Component<RedirectComponentPropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);

}






type RedirectComponentPropsType = {
    isAuth: boolean
}