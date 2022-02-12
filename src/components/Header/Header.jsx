import s from './Header.module.css'  // for example, s - "style"

const Header = (props) => {
    return (
        <div className={s.header}>
            <img
                src='https://sun9-50.userapi.com/sun9-22/impg/5rto0BCni8VW4LwgF7eZEdq9wZe19k8807uIXA/DuTrcI3rsmI.jpg?size=750x741&quality=96&proxy=1&sign=09e03727ea4864cb1566648f1899bfd1&type=album'/>
        </div>
    );
}

export default Header;