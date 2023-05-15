import React from 'react';
import {connect} from "react-redux";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";
import {LoginReduxForm} from "./Login";
import {LoginDataType, loginTC} from "../../Redux/Reducers/authReducer";
import {RootStateType} from "../../Redux/Store";
import {Redirect} from "react-router-dom";


class LoginContainer extends React.Component<LoginContainerPropsType, any> {
    onSubmit =(formData:any)=> {
        this.props.loginTC(formData)
    }

    render() {
        console.log('LOGIN RERENDER')
        if (this.props.isAuth) return <Redirect to={'/profile'} />
        return <LoginReduxForm onSubmit={this.onSubmit}/>
    }
}


const mapStateToProps = (state:RootStateType) => ({isAuth: state.auth.isAuth})
const mapDispatchToProps = (dispatch: AppDispatchType) => ({
    loginTC:(loginData:LoginDataType)=>dispatch(loginTC(loginData))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)






type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType={
    loginTC:(loginData:LoginDataType)=>void
}
export type LoginContainerPropsType = MapStatePropsType & MapDispatchPropsType