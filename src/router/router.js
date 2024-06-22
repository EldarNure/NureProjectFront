import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import PersonalPage from '@/pages/PersonalPage.vue';
import PersonalPageEdit from '@/pages/PersonalPageEdit.vue';
const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/me',
    name: 'PersonalPage',
    component: PersonalPage
  },
  {
    path: '/me/edit',
    name: 'PersonalPageEdit',
    component: PersonalPageEdit
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('jwt_token');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  }
  else if ((to.path == '/login' || to.path == '/register') && loggedIn) {
    next('/')
  } 
  else {
    next();
  }
});

export default router;
