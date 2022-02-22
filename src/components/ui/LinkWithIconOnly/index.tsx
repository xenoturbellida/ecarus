import {FC} from "react";
import styles from "./index.module.sass";
import {Icon} from "../Icon";
import {ILinkWithIconOnly} from "./index.interfaces";


export const LinkWithIconOnly: FC<ILinkWithIconOnly> = ({iconName, iconSize=24}) => {
    return (
        <a className={styles.linkWithIconOnly} href={'#'}>
            <Icon name={iconName} size={iconSize} />
        </a>
    )
}