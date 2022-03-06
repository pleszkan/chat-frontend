import React from 'react';

import styles from './ChatRecipients.module.scss';
import ChatCard from "../ChatCard";
import classNames from "classnames";

export default function ChatRecipients({chatIsOpen, setChatIsOpen}) {

    return (
        <div
            className={classNames(styles.chatRecipients, styles.disableSelect, chatIsOpen ? styles.chatBoxIsOpen : null)}>
            <ChatCard chatIsOpen={chatIsOpen} setChatIsOpen={setChatIsOpen}/>
            <ChatCard chatIsOpen={chatIsOpen} setChatIsOpen={setChatIsOpen}/>
            <ChatCard chatIsOpen={chatIsOpen} setChatIsOpen={setChatIsOpen}/>
            <ChatCard chatIsOpen={chatIsOpen} setChatIsOpen={setChatIsOpen}/>
            <ChatCard chatIsOpen={chatIsOpen} setChatIsOpen={setChatIsOpen}/>
        </div>
    )
}