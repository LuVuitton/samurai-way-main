import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";
import {clearUsersState, getUsersTC, onFollowTC, onUnfollowTC, showMoreAC} from "../../Redux/Reducers/UsersReducer";
import {setIsLoadingAC} from "../../Redux/Reducers/appReducer";
import {AppDispatchType} from "../../customHooks/useCustomDispatch";
import React from "react";
import {UsersList} from "./UsersList";
import {Preloader} from "../Other/Preloader";
import {OneUserType} from "../../Redux/Reducers/UsersReducer";
import {compose} from "redux";
import {withAuthRedirectHOC} from "../../customHOKs/wihtAuthRedirectHOK";


class UsersClass extends React.Component<UsersClassPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.pageNumber);
    }

    showMore = () => {
        this.props.showMoreAC();
        this.props.getUsersTC(this.props.pageNumber);
    }

    componentWillUnmount() {
        this.props.clearUsersState();
    }

    render() {
        return (
            <>
                {!this.props.usersReceivedStatus
                    ? <Preloader/>
                    : <UsersList
                        showMore={this.showMore}
                        totalUsers={this.props.totalUsers}
                        arr={this.props.arr}
                        isLoading={this.props.isLoading}
                        setIsLoadingAC={this.props.setIsLoadingAC}
                        usersAreLoading={this.props.usersAreLoading}
                        onFollowTC={this.props.onFollowTC}
                        onUnfollowTC={this.props.onUnfollowTC}
                    />
                }
            </>
        )
    }
}


const mapStateToProps = (state: RootStateType) => {
    return {
        pageNumber: state.users.pageNumbers,
        arr: state.users.users,
        totalUsers: state.users.totalUsers,
        usersReceivedStatus: state.users.usersReceivedStatus,
        isLoading: state.app.isLoading,
        usersAreLoading: state.users.usersAreLoading
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        showMoreAC: () => dispatch(showMoreAC()),
        clearUsersState: () => dispatch(clearUsersState()),
        setIsLoadingAC: (isLoading: boolean) => dispatch(setIsLoadingAC(isLoading)),
        getUsersTC: (pageNumber: number) => dispatch(getUsersTC(pageNumber)),
        onFollowTC: (userID: number) => dispatch(onFollowTC(userID)),
        onUnfollowTC: (userID: number) => dispatch(onUnfollowTC(userID))
    }
}


// export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectHOC
)(UsersClass)







type UsersClassPropsType = MapDispatchPropsType & MapStatePropsType

export type MapStatePropsType = {
    arr: OneUserType[];
    pageNumber: number;
    usersReceivedStatus: boolean;
    totalUsers: number;
    isLoading: boolean;
    usersAreLoading: number[];
}

type MapDispatchPropsType = {
    showMoreAC: () => void;
    clearUsersState: () => void;
    setIsLoadingAC: (isLoading: boolean) => void;
    getUsersTC: (pageNumber: number) => void;
    onFollowTC: (userID: number) => void;
    onUnfollowTC: (userID: number) => void;
}