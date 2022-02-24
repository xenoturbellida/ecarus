import React, {FC} from "react";
import styles from "./index.module.sass";
import {Link} from "../ui/Link";
import {LinkWithIcon} from "../ui/LinkWithIcon";
import {IHeader} from "./index.interfaces";
import logo from '../../svgIcons/logo.svg';


export const Header: FC<IHeader> = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.headerLeft}>
                        <img src={logo} alt='Логотип' />
                        <nav>
                            <ul className={styles.menu}>
                                <li>
                                    <Link to={'#'}>Главная</Link>
                                    <div className={styles.underscore}></div>
                                </li>
                                <li>
                                    <Link to={'#'}>Пункты сбора</Link>
                                    <div className={styles.underscore}></div>
                                </li>
                                <li>
                                    <Link to={'#'}>Экомаркет</Link>
                                    <div className={styles.underscore}></div>
                                </li>
                                <li>
                                    <Link to={'#'}>О сервисе</Link>
                                    <div className={styles.underscore}></div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.headerRight}>
                        <LinkWithIcon text={'Казань'} iconName='location' />
                        <LinkWithIcon text={'1000'} iconName='currency' hasGradient/>
                        <LinkWithIcon text={'Алексей'} iconName='avatar' hasGradient/>
                    </div>
                </div>

            </div>
            <div className={styles.headerDivider}></div>
        </>

    )
}