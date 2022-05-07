import React, {useEffect} from "react";
import Profile from "./Profile";
import {getUserProfileTC} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {useParams, } from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";

const ProfileContainerFunc = (props) => {
    const params = useParams('/profile/:userId/')
    let userId = params.userId
    if (!userId) {userId = 23841}

    useEffect(() => {props.getUserProfile(userId)}, [])

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
})

export default compose(
    connect(mapStateToProps, {getUserProfile: getUserProfileTC}),
    // withRouter
    // withAuthRedirect
)(ProfileContainerFunc)
// (ProfileContainer)

