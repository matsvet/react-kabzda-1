// import s from './MyPosts.module.css';
// import Post from "./Post/Post";
// import React from "react";
//
// const MyPosts = (props) => {
//
//     let posts = props.posts.map(pst =>
//         <Post
//             key={pst.id}
//             message={pst.message}
//             likes={pst.likesCount}
//             id={pst.id}
//         />)
//
//     let onAddPost = () => {
//         props.addPost();
//     }
//
//     let onPostChange = () => {
//         // обращаемся к элементу (каррент), на которую ссылается данная ссылка
//         let text = newPostElement.current.value;      // тут тоже обращаемся напрямую к DOM, однако всего лишь считываем, а не меняем, что не так критично
//         props.updateNewPostText(text);
//     }
//
//     // ссылка на элемент, чтобы достать из него информацию
//     let newPostElement = React.createRef();
//
//     return (
//         <div className={s.postsBlock}>
//             <h3>MY POSTS</h3>
//             <div>
//                 <div>
//                     {/*newPostElement is referred to this textarea*/}
//                     <textarea ref={newPostElement}
//                               onChange={onPostChange}
//                               value={props.newPostText}/>
//                 </div>
//                 <div>
//                     {/*callback - мы отдаём кнопке стрелочную анонимную функцию (именно саму функцию, а не её вызов!), чтобы она по клику вызывала ее. Т.е. неправильно вызывать её самим - без стрелочной фнукции, работать не будет
//                     либо объявляем функцию заранее, и тоже передаем не вызов функции, а просто имя, чтобы уже кнопка вызывала её*/}
//                     <button onClick={onAddPost}>Add post</button>
//                 </div>
//             </div>
//             <div className={s.posts}>
//                 {posts}
//             </div>
//         </div>
//     )
// }
//
// export default MyPosts;