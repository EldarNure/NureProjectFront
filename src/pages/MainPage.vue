<template>
    <div class="main-page-intro">
        <div class="container">
            <div class="main-page-header">
                <ul class="header-list">
                    <li class="header-list-element">Головна сторінка</li>
                    <li v-if="!userName" class="header-list-element" @click="goToLoginPage"><img src="@/assets/icons/icon-profile.svg" alt="ico" /> Увійти</li>
                    <li v-else class="header-list-element" @click="goToPersonalPage"><img src="@/assets/icons/icon-profile.svg" alt="ico" /> {{ userName }}</li>
                </ul>
            </div>
            <div class="intro-content">
                <p class="intro-content-text">Нерухомість в Україні</p>
                <div class="intro-content-button">Перейти до каталогу</div>
            </div>
        </div>
        
    </div>
    <div class="container">
        <div class="section-recommended-positions">
            <p class="recommended-positions-text">Рекомендовані пропозиції</p>
            <swiper-main-page></swiper-main-page>
        </div>
    </div>
    <div class="section-tips">
      <main-page-tips></main-page-tips>
    </div>
</template>

<script>
import SwiperMainPage from '@/components/swiperElements/SwiperMainPage.vue';
import MainPageTips from '@/components/mainPage/MainPageTips.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    name: "MainPage",
    components: {
      SwiperMainPage,
      MainPageTips
    },
    setup() {
      const router = useRouter();
      const store = useStore();
      const userName = computed(() => store.getters.userName)
      const goToLoginPage = () => {
        router.push('/login');
      }
      const goToPersonalPage = () => {
        router.push('/me');
      }
      return {
        goToLoginPage,
        userName,
        goToPersonalPage
      };
    },
}
</script>

<style src="@/assets/styles/MainPage.css"></style>