<template>
    <div class="swiper-container">
        <swiper
            class="main-swiper"
            :slides-per-view="3"
            :space-between="150"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>
                <swiper-element-flat></swiper-element-flat>
            </swiper-slide>
            <swiper-slide>
                <swiper-element-flat></swiper-element-flat>
            </swiper-slide>
            <swiper-slide>
                <swiper-element-flat></swiper-element-flat>
            </swiper-slide>
            <swiper-slide>
                <swiper-element-flat></swiper-element-flat>
            </swiper-slide>
            <swiper-slide>
                <swiper-element-flat></swiper-element-flat>
            </swiper-slide>
        </swiper>
        <div class="swiper-button-next" @click="nextSlide"><img src="@/assets/icons/icon-arrow-right.svg" alt="ico" /></div>
        <div class="swiper-button-prev" @click="prevSlide"><img src="@/assets/icons/icon-arrow-left.svg" alt="ico" /></div>
    </div>
    
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import SwiperElementFlat from '@/components/swiperElements/SwiperElementFlat.vue';
import { } from 'vue'
export default {
    name: "SwiperMainPage",
    components: {
        Swiper,
        SwiperSlide,
        SwiperElementFlat
    },
    setup() {
        let swiperVal = null;
        const onSwiper = (swiper) => {
            console.log(swiper)
            swiperVal = swiper
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        const nextSlide = () => {
            swiperVal.slideNext()
        };
        const prevSlide = () => {
            swiperVal.slidePrev()
        }
        return {
            onSwiper,
            onSlideChange,
            nextSlide,
            prevSlide
        };
    },
}
</script>

<style src="@/assets/styles/swiper.css"></style>
