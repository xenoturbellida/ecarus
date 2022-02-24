import styles from "./index.module.sass";
import {BaseLayout} from "../../components/BaseLayout";
import {Gallery} from "../../components/Gallery";

export const MainPage = () => {
    return (
        <BaseLayout>
            <Gallery />
        </BaseLayout>
    )
}
