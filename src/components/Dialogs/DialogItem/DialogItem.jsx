import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <img
                className={s.ava_dialog}
                src='https://lh3.googleusercontent.com/pw/AM-JKLVOrMfdE57kdC5L2k5DzHN78zfPdsa8XQLAL6k2cqvgF3G3O2ZXnYMZyvNEblC_qWqq4JzK7hjwP0pAQJ9rda5j6GZCOFqsZar3aEoXGGKsvWlBBtmxJT7sxIYyF0B_2lUNW5GAzaF4H3zYK8XLIv1Wng=w893-h1190-no?authuser=0'/>
            <NavLink to={path} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;