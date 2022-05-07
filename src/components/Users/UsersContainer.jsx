import React from 'react';
import {connect} from 'react-redux';
import {
    changeFollowingInProgressAC, followTC, getUsersTC,
    setCurrentPageAC, setUsersTotalCountAC, unfollowTC
} from "../../redux/usersReducer";
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        this.props.getUsers(pageNum, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                />
            }
            </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        setUsersTotalCountAC,
        changeFollowingInProgress: changeFollowingInProgressAC,
        getUsers: getUsersTC,
        follow: followTC,
        unfollow: unfollowTC,
    }),
    withAuthRedirect
)(UsersContainer)