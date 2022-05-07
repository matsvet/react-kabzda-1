import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import React from "react";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <div>
                <div className={s.item}>
                    <NavLink to='/profile'
                             className={navData => navData.isActive ? s.activeLink : s.item}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users'
                             className={navData => navData.isActive ? s.activeLink : s.item}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs'
                             className={navData => navData.isActive ? s.activeLink : s.item}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news'
                             className={navData => navData.isActive ? s.activeLink : s.item}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music'
                             className={navData => navData.isActive ? s.activeLink : s.item}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings'
                             className={navData => navData.isActive ? s.activeLink : s.item}>Settings</NavLink>
                </div>
            </div>
            <div>
                <Sidebar state={props.state}/>
            </div>
        </div>
    );
}

export default Navbar;