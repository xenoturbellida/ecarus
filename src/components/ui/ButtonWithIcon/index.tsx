import {FC} from "react";
import styles from "./index.module.sass";
import {Icon} from "../Icon";
import {IButtonWithIcon} from "./index.interfaces";


export const ButtonWithIcon: FC<IButtonWithIcon> = ({iconName, iconSize=24}) => {
    return (
        <button className={styles.buttonWithIcon}>
            <Icon name={iconName} size={iconSize} />
        </button>
    )
}
