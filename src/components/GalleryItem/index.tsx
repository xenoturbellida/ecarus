import {FC} from "react";
import styles from "./index.module.sass";
import classNames from "classnames/bind";
import galleryPhoto1 from "../../photos/galleryPhoto1.jpg";
import galleryPhoto2 from "../../photos/galleryPhoto2.jpg";
import galleryPhoto3 from "../../photos/galleryPhoto3.jpg";
import {Button} from "../ui/Button";
import {IGalleryItem} from "./index.interfaces";


const cx = classNames.bind(styles);

export const GalleryItem: FC<IGalleryItem>= ({
    title, paragraph, buttonTitle, onClick, itemNo
                                             }) => {

    let photo;
    switch (itemNo) {
        case 1:
            photo = galleryPhoto1;
            break;
        case 2:
            photo = galleryPhoto2;
            break;
        case 3:
            photo = galleryPhoto3;
    }

    return (
        <div className={cx({
            'galleryItem': true,
            'item1': itemNo === 1,
            'item2': itemNo === 2,
            'item3': itemNo === 3,
        })}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.paragraph}>{paragraph}</p>
                <Button onClick={onClick}>{buttonTitle}</Button>
            </div>
            <img src={photo} className={styles.photo} alt='photo' />
        </div>
    )
}