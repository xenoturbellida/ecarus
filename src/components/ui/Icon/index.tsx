import {FC} from "react";
import styles from "./index.module.sass"
import {IIcon} from "./index.interfaces";


export const Icon: FC<IIcon> = ({name, height=24, width=24}) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
            className={styles.icon}
        >
            <use xlinkHref={`/sprite.svg#${name}`} />
        </svg>
    )
}
