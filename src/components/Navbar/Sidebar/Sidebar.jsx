import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {

    let sidebarFriends = [
        props.state.friends.map(friend => {
            let path = `/friends/${friend.id}`
            return <div>
                <img className={s.ava_friend} src={friend.imgSrc}/>
                <NavLink to={path}>{friend.name}</NavLink>
            </div>
        })
    ]

    return (
        <div className={s.mainBlock}>
            <div>F R I E N D S</div>
            <div className={s.sidebarStyle}>
                {/*<img src="https://kartinkin.net/uploads/posts/2021-02/1612333628_17-p-arti-v-multyashnom-stile-art-kartinki-17.jpg"/>*/}
                {sidebarFriends}
            </div>
        </div>
    );
}

export default Sidebar;