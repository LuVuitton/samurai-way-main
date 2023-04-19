import {RootStateType} from "../../../Redux/Store";
import {connect} from "react-redux";
import {MessagesList} from "./MessagesList";

const mapStateToProps = (state:RootStateType)=> {
    return{
        arr: state.messenger.messagesArr
    }
}


export  const ConnMessagesList = connect(mapStateToProps)(MessagesList)