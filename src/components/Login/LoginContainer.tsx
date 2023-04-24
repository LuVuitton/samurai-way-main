import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";
import {Login} from "./Login";


class LoginContainer extends React.Component<LoginContainerPropsType, any> {


    render() {
        return <Login/>
    }
}
const mapStateToProps = (state: RootStateType) => {
    return {}
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)






type MapStatePropsType = {}
export type LoginContainerPropsType = MapStatePropsType