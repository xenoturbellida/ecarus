import {FC} from "react";
import styles from "./index.module.sass";
import {ICard} from "./index.interfaces";
import {LinkWithIconOnly} from "../ui/LinkWithIconOnly";
import {Icon} from "../ui/Icon";

export const Card: FC<ICard> = ({
    title, paragraph, imageName, imageHeight, imageWidth, to
                                }) => {
    return (
        <article className={styles.card}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.paragraph}>{paragraph}</p>
                <LinkWithIconOnly iconName='arrowLink' to={to} />
            </div>
            <Icon name={imageName} height={imageHeight} width={imageWidth} />
        </article>
    )
}