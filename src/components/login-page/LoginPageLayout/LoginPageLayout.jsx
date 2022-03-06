import styles from './LoginPageLayout.module.scss';

export default function LoginPageLayout({children}) {

    return (
        <div className={styles.loginPageLayout}>
            {children}
        </div>
    )
}