import styles from "./index.module.sass";
import {LinkWithIcon} from "../ui/LinkWithIcon";


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <LinkWithIcon text='info@ecorus.ru' iconName='mail' isFooter={true}/>
                <LinkWithIcon text='+7 (800) 880-88-88' iconName='phone' isFooter={true}/>
            </div>
        </div>
    )
}