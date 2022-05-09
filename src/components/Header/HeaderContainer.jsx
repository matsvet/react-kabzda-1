import React from "react";
import {connect} from "react-redux";
import {getAuthUserDataTC, logoutTC} from "../../redux/authReducer";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

class HeaderContainer extends React.Component {

    render () {
        return <Header {...this.props}/>
    }
}

const Header = (props) => {
    return (
        <div className={s.header}>
            <img
                src='https://sun9-50.userapi.com/sun9-22/impg/5rto0BCni8VW4LwgF7eZEdq9wZe19k8807uIXA/DuTrcI3rsmI.jpg?size=750x741&quality=96&proxy=1&sign=09e03727ea4864cb1566648f1899bfd1&type=album'/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>
                        {props.login} -
                        <button onClick={props.logout}>
                            Log out
                        </button>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {
    logout: logoutTC,
})(HeaderContainer);