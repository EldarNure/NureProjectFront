<template>
  <div class="swiper-element-flat">
    <img class="flat-image" src="@/assets/images/flat1.png" alt="">
    <div class="flat-description">
        <div class="flat-price">
            <p class="price">10 000 грн</p>
            <div class="flat-icons">
                <img src="@/assets/icons/icon-map.svg" alt="ico" />
                <img src="@/assets/icons/icon-heart.svg" alt="ico" />
            </div>
        </div>
        <p class="flat-street">вул. Лисківська 32/51</p>
        <div class="flat-place">
            <p class="flat-district">Деснянський</p>
            <p class="flat-city">Київ</p>
        </div>
        <div class="flat-size">
            <p class="flat-rooms">2 кімнати</p>
            <p class="flat-square">70 м2</p>
        </div>
        <div class="flat-button">
            Огляд квартири
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "SwiperElementFlat"
}
</script>

<style src="@/assets/styles/swiper.css"></style>