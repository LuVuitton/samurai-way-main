import {RootStateType} from "../../../Redux/Store";
import {connect} from "react-redux";
import React from "react";
import {OnePostType} from "../../../Redux/Reducers/ProfileReducer";
import {OnePostList} from "./OnePostList";


class PostsList extends React.PureComponent<PostsListPropsType> {

    // shouldComponentUpdate(nextProps: Readonly<PostsListPropsType>, nextState: Readonly<RootStateType>): boolean {
    //     return this.props.arr != nextProps.arr;
    // }


    render() {
        const mappedPosts = this.props.arr.map(e => <OnePostList userName={'me'} userImg={''} postText={e.text?e.text:''} postTime={e.time} key={e.id} />)


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
export const ConnPostsList = connect(mapStateToProps)(PostsList)


export type PostsListPropsType = {
    arr: Array<OnePostType>
}
