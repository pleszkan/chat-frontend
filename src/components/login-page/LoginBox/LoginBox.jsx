import styles from './LoginBox.module.scss';
import TextInput from "../../common/TextInput";
import Toggle from "../../common/Toggle";
import {useState} from "react";
import Button from "../../common/Button";

export default function LoginBox() {
    const [rememberMe, setRememberMe] = useState(false);
    return (
        <div className={styles.loginBox}>
            <h1>Login</h1>
            <TextInput id={"username"} placeholder={"Username"} autoCapitalize={"off"}/>
            <TextInput id={"password"} placeholder={"Password"}/>
            <div className={styles.rememberGroup}>
                <label htmlFor={"remember-me"} className={styles.label}>Remember Me</label>
                <Toggle id="remember-me" isChecked={rememberMe} onChange={() => {
                    setRememberMe((state) => !state)
                }}/>
            </div>
            <Button value={"Login"} color={"primary"} className={styles.button}/>
            <Button value={"Sign up"} color={"secondary"} className={styles.button}/>
            <a href={"/login"}>Forgot Password.</a>
        </div>
    )
}