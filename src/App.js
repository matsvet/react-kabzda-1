import './App.css';
import 'antd/dist/antd.css'
import {Route, Routes} from "react-router";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "./redux/authReducer";
import {initializeAppTC} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar state={this.props.store.getState().sidebarBlock}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized,
})

export default connect(mapStateToProps, {
    initializeApp: initializeAppTC,
})(App);
