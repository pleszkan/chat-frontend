import styles from './TextInput.module.scss';

export default function TextInput({id, value, placeholder, autoCapitalize}) {
    return (
        <input type="text" id={id} value={value} placeholder={placeholder} className={styles.input}
               autoCapitalize={autoCapitalize} autoCorrect="off"/>
    )
}
