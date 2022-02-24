import React from 'react';
import styles from './App.module.sass';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import SwiperCore, {Navigation, Pagination} from "swiper";

import 'swiper/css';
import {MainPage} from "./pages/MainPage";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {BaseLayout} from "./components/BaseLayout";
// import 'swiper/css/navigation';


// SwiperCore.use([Navigation]);

export const SliderNextButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
    )
}

export const SliderPrevButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slidePrev()}>Slide to the prev slide</button>
    )
}

function App() {
  return (
    <BaseLayout>

    </BaseLayout>
  );
}

export default App;
