import React, {FC} from "react";
import styles from "./index.module.sass";
import {LinkWithIcon} from "../ui/LinkWithIcon";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerDivider}></div>
            <div className={styles.footerContent}>
                <LinkWithIcon text='info@ecorus.ru' iconName='mail' isFooter={true}/>
                <LinkWithIcon text='+7 (800) 880-88-88' iconName='phone' isFooter={true}/>
            </div>
        </footer>
    )
}