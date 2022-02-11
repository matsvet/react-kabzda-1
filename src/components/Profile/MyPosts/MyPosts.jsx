import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            MY POSTS
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='Have you ever been in Egypt?' likes='4'/>
                <Post message='I was in Cairo a couple of weeks ago' likes='31'/>
            </div>
        </div>
    )
}

export default MyPosts;