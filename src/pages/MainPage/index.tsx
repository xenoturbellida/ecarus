import styles from "./index.module.sass";
import {BaseLayout} from "../../components/BaseLayout";
import {Gallery} from "../../components/Gallery";
import {Card} from "../../components/Card";

export const MainPage = () => {
    return (
        <BaseLayout>
            <Gallery />
            <div className={styles.cards}>
                <Card
                    title='Пункты сбора'
                    paragraph='Посмотри, где в твоем городе можно сдать вторсырье на переработку'
                    imageName='map'
                    imageWidth='314'
                    imageHeight='230'
                    to='#'
                />
                <Card
                    title='ЭкоМаркет'
                    paragraph='Используй заработанные экокоины для покупки товаров из переработанных материалов'
                    imageName='store'
                    imageWidth="284"
                    imageHeight='300'
                    to='#'
                />
            </div>

        </BaseLayout>
    )
}
