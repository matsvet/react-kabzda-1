import s from './Navbar.module.css'
console.log(s);
const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <a href=''>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href=''>Messages</a>
            </div>
            <div className={s.item}>
                <a href=''>News</a>
            </div>
            <div className={s.item}>
                <a href=''>Music</a>
            </div>
            <div className={s.item}>
                <a href=''>Settings</a>
            </div>
        </div>
    );
}

export default Navbar;