import { useSwiper } from 'swiper/react';
import {ButtonWithIcon} from "../ui/ButtonWithIcon";


export const SliderNextButton = () => {
    const swiper = useSwiper();
    return (
        <ButtonWithIcon onClick={() => swiper.slideNext()} iconName='arrowRight' />
    )
}

export const SliderPrevButton = () => {
    const swiper = useSwiper();
    return (
        <ButtonWithIcon onClick={() => swiper.slidePrev()} iconName='arrowLeft' />
    )
}