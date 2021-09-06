import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


axios.defaults.withCredentials = true;
if (localStorage.getItem('GH_TOKEN') !== null) {
  axios.defaults.headers.common['Authorization'] = `token ${localStorage.getItem('GH_TOKEN')}`;
}

axios.interceptors.request.use(function (config) {
  store.commit("load", true) //vuex mutation set loading state to true
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (config) {
  store.commit("load", false) //vuex mutation set loading state to false
  return config;
}, function (error) {
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('GH_TOKEN') ? true : false
  if (![
      'Login',
      'Auth'
    ].includes(to.name) &&
    !isAuthenticated) next({
    name: 'Login'
  })
  else next()
})


const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(VueSweetalert2)

app.mount('#app')