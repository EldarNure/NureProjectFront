<template>
  <div class="content">
    <router-view></router-view>
  </div>
  <MyFooter></MyFooter>
</template>

<script>
import { onMounted } from 'vue'
import MyFooter from './components/elements/Footer.vue'
import {jwtDecode} from 'jwt-decode';
import { useStore } from 'vuex';
export default {
  name: 'App',
  components: {
    MyFooter
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      if (localStorage?.getItem("jwt_token")) {
        store.dispatch("setUserShortInfo", jwtDecode(localStorage.getItem("jwt_token")))
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
