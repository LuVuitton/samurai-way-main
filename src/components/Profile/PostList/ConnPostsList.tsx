import {StateType} from "../../../Redux/Store";
import {connect} from "react-redux";
import PostsList from "./PostsList";

const mapStateToProps = (state:StateType) => {
    return {
        arr: state.profile.postsArr
    }
}



export const ConnPostsList = connect(mapStateToProps)(PostsList)
