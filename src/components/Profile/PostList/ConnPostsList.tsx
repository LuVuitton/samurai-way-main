import {RootStateType} from "../../../Redux/Store";
import {connect} from "react-redux";
import React from "react";
import {OnePostType} from "../../../Redux/Reducers/ProfileReducer";


class PostsList extends React.PureComponent<PostsListPropsType> {

    // shouldComponentUpdate(nextProps: Readonly<PostsListPropsType>, nextState: Readonly<RootStateType>): boolean {
    //     return this.props.arr != nextProps.arr;
    // }


    render() {
        console.log('rerender')
        const mappedPosts = this.props.arr.map(e => <div key={e.id}>  {e.text} {e.time}</div>)


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
