import React from "react";

import styles from './ChatBox.module.scss'
import classNames from "classnames";

export default function ChatBox({chatIsOpen, setChatIsOpen}) {

    return (
        <div className={classNames(styles.chatBox, chatIsOpen ? styles.chatBoxIsOpen : null)}>
            <div className={styles.chatRecipientName}>
                <div className={styles.backButton} onClick={() => setChatIsOpen(false)}>&#8592;</div>
                Chat Recipient Name
            </div>
            <div className={styles.chatMessages}>
                <div className={classNames(styles.messageContainer, styles.our)}>
                    <div className={classNames(styles.message, styles.our)}>Aligned</div>
                </div>
                <div className={classNames(styles.messageContainer, styles.their)}>
                    <div className={classNames(styles.message, styles.their)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className={classNames(styles.messageContainer, styles.their)}>
                    <div className={classNames(styles.message, styles.their)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className={classNames(styles.messageContainer, styles.our)}>
                    <div className={classNames(styles.message, styles.their)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className={classNames(styles.messageContainer, styles.our)}>
                    <div className={classNames(styles.message, styles.their)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className={classNames(styles.messageContainer, styles.our)}>
                    <div className={classNames(styles.message, styles.our)}>Aligned</div>
                </div>
                <div className={classNames(styles.messageContainer, styles.our)}>
                    <div className={classNames(styles.message, styles.our)}>Aligned</div>
                </div>
                <div className={classNames(styles.messageContainer, styles.our, styles.faded)}>
                    <div className={classNames(styles.message, styles.our)}>Loading...</div>
                </div>
                <div className={classNames(styles.messageContainer, styles.our)}>
                    <div className={classNames(styles.message, styles.their)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className={classNames(styles.messageContainer, styles.their)}>
                    <div className={classNames(styles.message, styles.their)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <div className={styles.chatInputs}>
                <input type={"text"} className={styles.chatBoxInput} placeholder={"Aa"}/>
                {/*<input type={"submit"} className={styles.chatBoxSubmitButton} value={">"}/>*/}
            </div>
        </div>
    )
}