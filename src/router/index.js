import Vue from 'vue'
import VueRouter from 'vue-router'
// import Vuex from 'vuex';

import layout from '@/views/layout'
// import index from '@/views/index'

Vue.use(VueRouter);
// Vue.use(Vuex);

//重构全局钩子
const routes = [{
    path: '/',
    name: layout,
    component: layout,
    redirect: '/index',
    //   meta: {
    //     requireAuth: true,
    //     keepAlive: true
    //   },
    children: [{
            path: '/index',
            component: () =>
                import ('@/views/index'),
        }, {
            path: '/product',
            component: () =>
                import ('@/views/list/product'),
        },
        {
            path: '/product/detail/:id',
            component: () =>
                import ('@/views/detail/product'),
        },
        {
            path: '/news',
            component: () =>
                import ('@/views/list/news')
        }, {
            path: '/about',
            component: () =>
                import ('@/views/list/about')
        }
    ]
}, ];
const router = new VueRouter({
    mode: 'history', //mode: 'hash'
    scrollBehavior: () => ({
        y: 0
    }),
    routes
});

// 权限控制
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (store.state.Username) { 
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         } 
//       })
//     }
//   } else {
//     next();
//   }
// });

//保持用户名 登录的时候将信息存储到localstorage 然后获取提交到Vuex
// if (window.localStorage.getItem('Username', 'Name')) {
//   store.commit("Username", window.localStorage.getItem('Username'));
//   store.commit("Name", window.localStorage.getItem('Name'));
// }

export default router;