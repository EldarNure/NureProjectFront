<template>
    <div class="personal-page-header">
        <div class="personal-page-container">
            <div class="personal-page-edit-wrapper">
                <ul class="header-list">
                    <li class="header-list-element" @click="goToMainPage">Головна сторінка</li>
                    <li class="header-list-element"><img src="@/assets/icons/icon-profile.svg" alt="ico" /> {{ userName }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="personal-page-container">
        <div class="personal-page-edit-title">
            <p>Редагування особистого профілю</p>
        </div>
        <div class="register-container">
            <div class="personal-page-edit-content">
                <div class="personal-page-edit-main">
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
                        <p>Новий пароль</p>
                        <input type="password" class="register-input" :class="{'validation-error': passwordError}" v-model="password">
                    </div>
                    <div class="register-element">
                        <p>Підтвердження пароля</p>
                        <input type="password" class="register-input" :class="{'validation-error': passwordSecondError}" v-model="passwordSecond">
                    </div>
                </div>
                <div class="personal-page-edit-buttons">
                    <div class="button-edit-cancel" @click="goToPersonalPage">Скасувати</div>
                    <div class="button-edit-do" @click="sendRequest">Зберегти зміни</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
export default {
    name: "PersonalPageEdit",
    setup() {
        const router = useRouter();
        const store = useStore();
        const userName = computed(() => store.getters.userName)
        const userId = computed(() => store.getters.userId)
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
            if (password.value.length && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)) {
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
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const sendRequest = () => {
            if (checkValidation()) {
                axios.patch("http://localhost:5050/change_user", {
                    id: userId.value,
                    first_name: name.value,
                    last_name: lastName.value,
                    email: email.value,
                    phone_number :phoneNumber.value,
                    password: password.value

                },config)
                .then(response => {
                    if (response.status === 200) {
                        localStorage.setItem("jwt_token", response.data)
                        router.push('/me').then(() => {
                            window.location.reload();
                        })
                    }
                })
            }
        }
        const goToMainPage = () => {
            router.push('/')
        }
        const goToPersonalPage = () => {
            router.push('/me')
        }
        onMounted(() => {
            axios.get(`http://localhost:5050/user/${userId.value}`)
                .then(response => {
                    if (response.status === 200) {
                        console.log(response.data)
                        name.value = response.data.first_name
                        lastName.value = response.data.last_name
                        email.value = response.data.email
                        phoneNumber.value = response.data.phone_number
                    }
                })
        })
        return {
            userName,
            goToMainPage,
            goToPersonalPage,
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
        };
    },
}
</script>

<style src="@/assets/styles/PersonalPageEdit.css"></style>
