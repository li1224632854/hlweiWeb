import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http'
import VueAxios from 'vue-axios'
// import store from './store/store'
import 'babel-polyfill'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    axios,
    // store,
    template: '<App/>',
    components: {
        App
    },
})