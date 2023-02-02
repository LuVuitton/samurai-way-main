import {StateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import DialogList from "./DialogList";



const mapStateToProps = (state:StateType)=> {
    return{
        arr: state.messenger.dialoguesArr
    }
}


export const ConnDialogList = connect(mapStateToProps)(DialogList)