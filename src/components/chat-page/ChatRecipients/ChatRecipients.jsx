import React from 'react';

import styles from './ChatRecipients.module.scss';
import ChatCard from "../ChatCard";
import classNames from "classnames";

export default function ChatRecipients() {

    return (
        <div className={classNames(styles.chatRecipients, styles.chatRecipientsNotVisible, styles.disableSelect)}>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
        </div>
    )
}