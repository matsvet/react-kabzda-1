import React from "react";
import {addPostCreator, updateNewPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     let addPost = () => { props.store.dispatch(addPostCreator()); }
//     let onPostChange = (text) => { props.store.dispatch(updateNewPostCreator(text)); }
//
//     return (<MyPosts updateNewPostText={onPostChange}
//                      addPost={addPost}
//                      posts={state.profilePage.posts}
//                      newPostText={state.profilePage.newPostText}
//     />)
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostCreator(text)),
        addPost: () => dispatch(addPostCreator()),
    }
}

// возвращает новую контейнерную компоненту
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); // вызываем ту функцию, которую нам вернула функция коннект

export default MyPostsContainer;