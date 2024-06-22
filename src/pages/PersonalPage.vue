<template>
    <div class="header">
        <div class="personal-page-container">
            <div class="personal-page-wrapper">
                <div class="button-add-flat">
                    Додати оголошення +
                </div>
                <ul class="header-list">
                    <li class="header-list-element" @click="goToMainPage">Головна сторінка</li>
                    <li class="header-list-element"><img src="@/assets/icons/icon-profile.svg" alt="ico" /> {{ userName }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="personal-page-container">
        <div class="personal-page-title">
            <p>Особистий кабінет</p>
            <div class="button-edit-profile" @click="goToPersonalPageEdit">
                Редагувати профіль
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    name: "PersonalPage",
    setup() {
      const router = useRouter();
      const store = useStore();
      const userName = computed(() => store.getters.userName)
      const goToMainPage = () => {
        router.push('/')
      }
      const goToPersonalPageEdit = () => {
        router.push('/me/edit')
      }
      return {
        userName,
        goToMainPage,
        goToPersonalPageEdit
      };
    },
}
</script>

<style src="@/assets/styles/PersonalPage.css"></style>
