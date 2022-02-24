import {FC} from "react";
import styles from "./index.module.sass";
import {Icon} from "../Icon";
import {ILinkWithIconOnly} from "./index.interfaces";


export const LinkWithIconOnly: FC<ILinkWithIconOnly> = ({iconName, iconHeight=24, iconWidth=24, to}) => {
    return (
        <a className={styles.linkWithIconOnly} href={to}>
            <Icon name={iconName} height={iconHeight} width={iconWidth} />
        </a>
    )
}