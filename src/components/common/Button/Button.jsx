import styles from './Button.module.scss';
import classNames from "classnames";

export default function Button({value, color, className}) {
    const colorSchemes = {
        primary: styles.primary,
        secondary: styles.secondary,
    }
    const currentColor = Object.keys(colorSchemes).includes(color) ? colorSchemes[color] : colorSchemes.primary;

    return (
        <input type={"button"} className={classNames(styles.button, 'animatedClick', currentColor, className)}
               defaultValue={value}/>
    )
}
