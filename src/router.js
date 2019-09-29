import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Cart from "./views/Cart.vue";
import store from "./store";
import History from "./utils/history";

Vue.use(Router);
// 使用我我们自己写的方法
Vue.use(History);

// 实例化之前，扩展Router
Router.prototype.goBack = function () {
    this.isBack = true;
    
    // 这个是Router自带的back回退方法
    this.back();
};
  

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart
        },
        {
            path: "/about",
            name: "about",
            meta: {
                auth: true
            },
            component: () => import(/* webpack */ "./views/About.vue")
        }
    ]
});

// 全居守卫
router.beforeEach((to, from, next) => {
    // 判断需要 权限的路由
    if (to.meta.auth) {
        // 需要验证 检查令牌 token
        if (store.state.token) {
            next();
        } else {
            //  否则 就需要跳转到login 界面
            next({
                path: "/login",
                query: {
                    redirect: to.path
                }
            });
        }
    } else {
        // 如果不需要验证 权限的路由 就直接让他过了
        next();
    }
});

// 在路由结束之后 添加到_history 数组里面去
router.afterEach((to, from) => {
    if(router.isBack) {
        // 后退
        History.pop();
        router.isBack = false;
        router.transitionName = "route-back";
    } else {
        // 把pash() 要写成History.push() 才会生效
        History.push(to.path);
        router.transitionName= "route-forward";
    }
});

export default router;
