import {FC} from "react";
import styles from "./index.module.sass";
import {Icon} from "../Icon";
import {IButtonWithIcon} from "./index.interfaces";


export const ButtonWithIcon: FC<IButtonWithIcon> = ({iconName, iconWidth=24, iconHeight=24, onClick}) => {
    return (
        <button className={styles.buttonWithIcon} onClick={onClick}>
            <Icon name={iconName} width={iconWidth} height={iconHeight} />
        </button>
    )
}
