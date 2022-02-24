import {FC} from 'react';
import styles from './index.module.sass';
import {ILink} from "./index.interfaces";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

export const Link: FC<ILink> = (
    {to, children}, isActive=false
) => {
    return (
        <a
            href={to}
            className={cx({
                'link': true,
                'active': isActive,
                'inactive': isActive
            })}
        >
            {children}
        </a>
    )
}