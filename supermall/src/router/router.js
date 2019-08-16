import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'
import Cart from 'views/cart/Cart.vue'
import Category from 'views/category/Category.vue'
import Profile from 'views/profile/Profile.vue'
//3.创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },//修改路由首地址
        { path: '/home', component: Home },
        { path: '/cart', component: Cart },
        { path: '/category', component: Category },
        { path: '/profile', component: Profile },
    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类，默认的类名叫router-link-active
})

export default router//把路由对象暴漏出去