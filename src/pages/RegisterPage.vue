<template>
  <div class="register-header">
    <div class="header-content">
        <img src="@/assets/icons/icon-full-arrow-left.svg" alt="">
        <p @click="goBack">Повернутися на головну</p>
    </div>
  </div>
  <div class="register-container">
    <div class="register-page-content">
        <p class="register-page-text">Реєстрація</p>
        <div class="register-page-main">
            <div class="register-element">
                <p>Ім'я</p>
                <input type="text" class="register-input" :class="{'validation-error': nameError}" v-model="name">
            </div>
            <div class="register-element">
                <p>Прізвище</p>
                <input type="text" class="register-input" :class="{'validation-error': lastNameError}" v-model="lastName">
            </div>
            <div class="register-element">
                <p>Адреса електронної пошти</p>
                <input type="text" class="register-input" :class="{'validation-error': emailError}" v-model="email">
            </div>
            <div class="register-element">
                <p>Номер телефону</p>
                <input type="text" class="register-input" :class="{'validation-error': phoneNumberError}" v-model="phoneNumber">
            </div>
            <div class="register-element">
                <p>Пароль</p>
                <input type="password" class="register-input" :class="{'validation-error': passwordError}" v-model="password">
            </div>
            <div class="register-element">
                <p>Підтвердження пароля</p>
                <input type="password" class="register-input" :class="{'validation-error': passwordSecondError}" v-model="passwordSecond">
            </div>
        </div>
        <button class="button-register" @click="sendRequest">
            Реєстрація
        </button>
        <p class="redirect-login">Вже маєте акаунт? <a href="/login">Увійти</a></p>
    </div>
  </div>
  
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
    name: "RegisterPage",
    setup() {
        const router = useRouter();
        const name = ref('');
        const lastName = ref('');
        const email = ref('');
        const phoneNumber = ref('');
        const password = ref('');
        const passwordSecond = ref('');

        const nameError = ref(false)
        const lastNameError = ref(false)
        const emailError = ref(false)
        const phoneNumberError = ref(false)
        const passwordError = ref(false)
        const passwordSecondError = ref(false)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const goBack = () => {
            router.push('/');
        }
        const checkValidation = () => {
            let validate = true
            if (!/^[А-Яа-яЁёІіЇїЄєҐґ']{2,30}$/.test(name.value)) {
                nameError.value = true
                validate = false
            }
            else {
                nameError.value = false
            }
            if (!/^[А-Яа-яЁёІіЇїЄєҐґ']{2,30}$/.test(lastName.value)) {
                lastNameError.value = true
                validate = false
            }
            else {
                lastNameError.value = false
            }
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
                emailError.value = true
                validate = false
            }
            else {
                emailError.value = false
            }
            if (!/^\+380\d{9}$/.test(phoneNumber.value)) {
                phoneNumberError.value = true
                validate = false
            }
            else {
                phoneNumberError.value = false
            }
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)) {
                passwordError.value = true
                passwordSecondError.value = true
                validate = false
            }
            else {
                if (password.value !== passwordSecond.value) {
                    passwordError.value = true
                    passwordSecondError.value = true
                    validate = false
                }
                else {
                    passwordError.value = false
                    passwordSecondError.value = false
                }
            }
            
            return validate
        }
        const sendRequest = () => {
            if (checkValidation()) {
                axios.post("http://localhost:5050/create_new_user", {
                    first_name: name.value,
                    last_name: lastName.value,
                    email: email.value,
                    phone_number :phoneNumber.value,
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
            }
        }
        return {
            goBack,
            name,
            lastName,
            email,
            phoneNumber,
            password,
            passwordSecond,
            sendRequest,
            nameError,
            checkValidation,
            lastNameError,
            emailError,
            phoneNumberError,
            passwordError,
            passwordSecondError
        }
    }
};
</script>

<style src="@/assets/styles/Register.css"></style>

