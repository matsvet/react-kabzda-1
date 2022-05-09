import React, {useEffect} from "react";
import Profile from "./Profile";
import {getStatusTC, getUserProfileTC, updateStatusTC} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Navigate, useParams,} from "react-router";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";


const ProfileContainerFunc = (props) => {
    const params = useParams('/profile/:userId/')
    let userId = params.userId
    if (!userId) {
        userId = props.currentUserId
        if (!userId) {
            return <Navigate to={"/login"}/>
        }
    }

    useEffect(() => {
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])

    return (
        <Profile {...props}/>
    )
}

// class ProfileContainer extends React.Component {
//     componentDidMount() {
//         let userId = this.props.params.userId;
//         if (!userId) {
//             userId = 2;
//         }
//         debugger
//         this.props.getUserProfile(userId);
//     }
//     render() {
//         return (
//             <Profile {...this.props}/>
//         )
//     }
// }

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currentUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileTC,
        getStatus: getStatusTC,
        updateStatus: updateStatusTC,
    }),
    // withRouter
)(ProfileContainerFunc)
// (ProfileContainer)

