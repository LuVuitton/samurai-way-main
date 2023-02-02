import {StateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import {MessagesList} from "./MessagesList";

const mapStateToProps = (state:StateType)=> {
    return{
        arr: state.messenger.messagesArr
    }
}


export  const ConnMessagesList = connect(mapStateToProps)(MessagesList)