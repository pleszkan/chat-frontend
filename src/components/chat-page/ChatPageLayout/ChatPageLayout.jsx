import styles from './ChatPageLayout.module.scss';

export default function ChatPageLayout({children}) {
    return (
        <div className={styles.chatPageLayout}>
            {children}
        </div>
    )
}
