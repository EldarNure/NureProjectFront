<template>
  <div class="login-header">
    <div class="header-content">
        <img src="@/assets/icons/icon-full-arrow-left.svg" alt="">
        <p @click="goBack">Повернутися на головну</p>
    </div>
  </div>
  <div class="login-page-content">
    <p class="login-page-text">Вхід на сайт</p>
    <div class="login-page-main">
        <div class="login-block">
            <div class="login">
                <p>E-mail</p>
                <input type="text" class="login-input" v-model="login">
            </div>
            <div class="password">
                <p>Пароль</p>
                <input type="password" class="login-input" v-model="password">
            </div>
            <p class="login-error" v-if="errorLogin">Невірний email або пароль</p>
            <button class="button-enter" 
                    :class="{'button-enter-active': isButtonActive}" 
                    :disabled="!isButtonActive"
                    @click="sendRequest">
                Увійти
            </button>
        </div>
        <div class="divider">
            <div class="line"></div>
            <div class="or-text">АБО</div>
            <div class="line"></div>
        </div>
        <div class="login-socials">
            <div class="social-element-google">
                <img src="@/assets/icons/icon-google-logo.svg" alt="">
                Увійти через Google
            </div>
            <GoogleLogin class="social-element-google" :callback="callback"/>
            <div class="social-element-email" @click="goToRegisterPage">
                <img src="@/assets/icons/icon-email-letter.svg" alt="">
                Зареєструватися через email
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
    name: "LoginPage",
    setup() {
        const googleSignInParams = {
            client_id: '621153080014-ajriltroped5k1ahva51pha3qvrpppq8.apps.googleusercontent.com'
        }
        const router = useRouter();
        const login = ref('');
        const password = ref('');
        const errorLogin = ref(false)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const isButtonActive = computed(() => {
            return !!(password.value.length && login.value.length)
        })
        const goBack = () => {
            router.push('/');
        }
        const goToRegisterPage = () => {
            router.push('/register');
        }
        const sendRequest = () => {
            errorLogin.value = false
            axios.post("http://localhost:5050/login", {
                email: login.value,
                password: password.value
            },config)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem("jwt_token", response.data)
                    router.push('/').then(() => {
                        window.location.reload();
                    })
                }
            })
            .catch(error => {
                if(error.response.status == 401) {
                    errorLogin.value = true
                }
            })
        }
        return {
            goBack,
            login,
            password,
            isButtonActive,
            goToRegisterPage,
            sendRequest,
            errorLogin,
            googleSignInParams
        }
    }
};
</script>

<style src="@/assets/styles/LoginPage.css"></style>

