import {FC} from "react";
import styles from "./index.module.sass";
import {Icon} from "../Icon";
import {ILinkWithIcon} from "./index.interfaces";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

export const LinkWithIcon: FC<ILinkWithIcon> =
    ({text, iconName, iconHeight=24, iconWidth=24, isFooter=false, hasGradient=false}) => {
    return (
        <a className={cx({linkWithIcon: true, footerLink: isFooter})}
           href={'#'}
        >
            {hasGradient
                ? <img src={require(`../../../svgIcons/${iconName}.svg`)} alt={iconName} />
                : <Icon name={iconName} width={iconWidth} height={iconHeight}/>
            }
            {text}
        </a>
    )
}
