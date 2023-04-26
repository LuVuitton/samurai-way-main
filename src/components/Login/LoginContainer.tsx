import React from 'react';
import {connect} from "react-redux";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";
import {LoginReduxForm} from "./Login";
import {LoginDataType, loginTC} from "../../Redux/Reducers/authReducer";


class LoginContainer extends React.Component<LoginContainerPropsType, any> {

    onSubmit =(formData:any)=> {
        console.log(formData)
        this.props.loginTC(formData)
    }

    render() {
        return <LoginReduxForm onSubmit={this.onSubmit}/>
    }
}


const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch: AppDispatchType) => ({
    loginTC:(loginData:LoginDataType)=>dispatch(loginTC(loginData))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)






type MapStatePropsType = {}
type MapDispatchPropsType={
    loginTC:(loginData:LoginDataType)=>void
}
export type LoginContainerPropsType = MapStatePropsType & MapDispatchPropsType