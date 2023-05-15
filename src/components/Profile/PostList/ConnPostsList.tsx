import {RootStateType} from "../../../Redux/Store";
import {connect} from "react-redux";
import React from "react";
import {deletePostAC} from "../../../Redux/Reducers/ProfileReducer";
import {OnePostList} from "./OnePostList";
import {Dispatch} from "redux";


class PostsList extends React.PureComponent<PostsListPropsType> {

    // shouldComponentUpdate(nextProps: Readonly<PostsListPropsType>, nextState: Readonly<RootStateType>): boolean {
    //     return this.props.arr != nextProps.arr;
    // }


    render() {
        const mappedPosts = this.props.arr.map(e => <OnePostList deletePostHandler={this.props.deletePostHandler} postID={e.id}userName={'me'} userImg={''} postText={e.text?e.text:''} postTime={e.time} key={e.id} />)


        return (
            <div>
                {mappedPosts}
            </div>
        );
    }
}



const mapStateToProps = (state: RootStateType) => {
    return {
        arr: state.profile.postsArr
    }
}

const mapDispatchTiProps = (dispatch:Dispatch)=> {
    return {
        deletePostHandler(postID:string) {
            dispatch(deletePostAC(postID))
        }
    }
}
export const ConnPostsList = connect(mapStateToProps, mapDispatchTiProps )(PostsList)


export type PostsListPropsType = mapStateType & mapDispatchType


type mapStateType = ReturnType<typeof mapStateToProps>
type mapDispatchType = ReturnType<typeof mapDispatchTiProps>