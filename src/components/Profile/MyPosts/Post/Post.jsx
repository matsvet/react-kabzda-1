import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                className={s.ava_post}
                src='https://lh3.googleusercontent.com/pw/AM-JKLVOrMfdE57kdC5L2k5DzHN78zfPdsa8XQLAL6k2cqvgF3G3O2ZXnYMZyvNEblC_qWqq4JzK7hjwP0pAQJ9rda5j6GZCOFqsZar3aEoXGGKsvWlBBtmxJT7sxIYyF0B_2lUNW5GAzaF4H3zYK8XLIv1Wng=w893-h1190-no?authuser=0'/>
            {props.message}
            <div>
                <span>{props.likes}❤ ... </span>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;