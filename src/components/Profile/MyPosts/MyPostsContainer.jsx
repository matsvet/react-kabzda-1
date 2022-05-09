import React from "react";
import {addPostAC, } from "../../../redux/profileReducer";
import {connect} from "react-redux";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

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

const MyPosts = (props) => {

    let posts = props.posts.map(pst =>
        <Post
            key={pst.id}
            message={pst.message}
            likes={pst.likesCount}
            id={pst.id}
        />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>MY POSTS</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

let maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {/* handleSubmit - внутренняя функция редакс-форм, которая собирает все данные с формы и передаёт их */}
        <div>
            <Field name={"newPostText"}
                   component={Textarea}
                   validate={[required, maxLength10]}
                   placeholder={"Post your message"}
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => dispatch(addPostAC(newPostText)),
    }
}

// возвращает новую контейнерную компоненту
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); // вызываем ту функцию, которую нам вернула функция коннект

export default MyPostsContainer;