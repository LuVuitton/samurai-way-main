import {RootStateType} from "../../../Redux/Store";
import {connect} from "react-redux";
import DialogList from "./DialogList";


const mapStateToProps = (state: RootStateType) => {
    return {
        arr: state.messenger.dialoguesArr
    }
}


export const ConnDialogList = connect(mapStateToProps)(DialogList)