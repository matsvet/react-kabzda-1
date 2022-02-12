import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogs = props.diaPage.dialogs.map( dlg => <DialogItem name={dlg.name} id={dlg.id}/> )
    let messages = props.diaPage.messages.map( msg => <Message message={msg.message} id={msg.id}/> )

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;  // тут тоже обращаемся напрямую к DOM, однако всего лишь считываем, а не меняем, что не так критично
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messagesStyle}>
                {messages}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;