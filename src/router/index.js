import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '@/views/layout'

Vue.use(VueRouter);

//重构全局钩子
const routes = [{
    path: '/',
    name: layout,
    component: layout,
    redirect: '/index',
    children: [{
            path: '/index',
            component: () =>
                import ('@/views/index'),
        }, {
            path: '/product',
            component: (resolve) => require(['@/views/list/product'], resolve)
        }, , {
            path: '/solution',
            component: (resolve) => require(['@/views/list/solution'], resolve)
        },
        {
            path: '/product/detail/:id',
            component: (resolve) => require(['@/views/detail/product'], resolve)
        },
        {
            path: '/news',
            component: (resolve) => require(['@/views/list/news'], resolve)
        },
        {
            path: '/news/detail/:id',
            component: (resolve) => require(['@/views/detail/news'], resolve)
        }, {
            path: '/about',
            component: (resolve) => require(['@/views/list/about'], resolve)
        }
    ]
}, ];
const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes
});

export default router;