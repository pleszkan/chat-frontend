import styles from './ChatCard.module.scss';
import classNames from "classnames";

export default function ChatCard() {
    return (
        <div className={styles.chatCard}>
            <div className={styles.chatCardPhoto}/>
            <div className={styles.chatCardTextContainer}>
                <div className={classNames(styles.chatCardTextTitle, styles.disableSelect)}>John Doe</div>
                <span className={styles.chatCardTextSubtitle}>This is a message...</span>
            </div>
        </div>
    );
}
