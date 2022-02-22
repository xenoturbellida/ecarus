import {FC} from "react";
import styles from "./index.module.sass";
import {Icon} from "../Icon";
import {ILinkWithIcon} from "./index.interfaces";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

export const LinkWithIcon: FC<ILinkWithIcon> =
    ({text, iconName, iconSize=24, isFooter=false}) => {
    return (
        <a className={cx({linkWithIcon: true, footerLink: isFooter})}
           href={'#'}
        >
            <Icon name={iconName} size={iconSize}/>
            {text}
        </a>
    )
}
