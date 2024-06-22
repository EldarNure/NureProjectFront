import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/index'
import './assets/styles/reset.css';
import './assets/styles/global.css';
import vue3GoogleLogin from 'vue3-google-login'
createApp(App).use(router).use(store).use(vue3GoogleLogin, {
                                            clientId: '621153080014-ftskkifpih1e9g8u3c448ecadncmkur2.apps.googleusercontent.com'
                                        }).mount('#app')
