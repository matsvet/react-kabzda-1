import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/favourites' className={navData => navData.isActive ? s.active : s.dialog}>Favourites</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/01' className={navData => navData.isActive ? s.active : s.dialog}>Mashka</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/02' className={navData => navData.isActive ? s.active : s.dialog}>Lenka</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/03' className={navData => navData.isActive ? s.active : s.dialog}>Dashka</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/04' className={navData => navData.isActive ? s.active : s.dialog}>Pashka</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/05' className={navData => navData.isActive ? s.active : s.dialog}>Mishka</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/06' className={navData => navData.isActive ? s.active : s.dialog}>Sashka</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Yo-Yo</div>
                <div className={s.message}>Man</div>
                <div className={s.message}>Hooli</div>
                <div className={s.message}>Grusteam</div>
            </div>
        </div>
    )
}

export default Dialogs;