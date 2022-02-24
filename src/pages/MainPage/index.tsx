import styles from "./index.module.sass";
import {BaseLayout} from "../../components/BaseLayout";
import {GalleryItem} from "../../components/GalleryItem";

export const MainPage = () => {
    return (
        <BaseLayout>
            <GalleryItem
                title='Сделаем мир чище'
                paragraph='Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов'
                buttonTitle='Условия сервиса'
                onClick={() => {}}
                itemNo={1}
            />
        </BaseLayout>
    )
}
