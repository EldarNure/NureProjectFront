<template>
  <div class="container">
    <h2>Поради при виборі нерухомості</h2>
    <div class="tips-card-wrapper">
      <div class="tip-card" v-for="(tip, index) in tips" :key="index">
            <p>{{ tip.title }}</p>
            <div class="card-bottom">
              <img :src="tip.icon" :alt="tip.title">
              <div class="tip-button">
                Читати
              </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "MainPageTips",
    setup() {
        const tips = [
            {
                icon: require('../../assets/icons/icon-houses.svg'),
                title: 'Важливі аспекти під час перегляду квартири або будинку'
            },
            {
                icon: require('../../assets/icons/icon-house-dollar.svg'),
                title: 'Фінансові поради'
            },
            {
                icon: require('../../assets/icons/icon-house-doc.svg'),
                title: 'Оформлення договорів, юридичні консультації'
            },
              {
                icon: require('../../assets/icons/icon-building.svg'),
                title: 'Важливі аспекти під час перегляду квартири або будинку'
              }
        ]
        return {tips}
    }
};
</script>
<style src="@/assets/styles/MainPage.css"></style>
