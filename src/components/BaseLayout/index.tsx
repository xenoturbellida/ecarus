import {FC} from "react";
import {Footer} from "../Footer";
import styles from "./index.module.sass";
import {Header} from "../Header";

export interface IBaseLayout {

}
export const BaseLayout: FC<IBaseLayout> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                Header
            </header>
            <div className={styles.sidebar}>Sidebar</div>
            <div className={styles.sidebar2}>Sidebar 2</div>
            <main className={styles.content}>
                Content
                <br /> More content than we had before so this column is now quite tall.
            </main>
            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    )
}