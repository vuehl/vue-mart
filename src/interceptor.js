import axios from "axios";
import store from "./store";
import router from "./router";

/* 全局添加拦截器作用是可以在每个api前面就加上headers的token验证 */
axios.interceptors.request.use(config => {
    /* 判断token是否存在和是否需要token验证的路由 */
    if (store.state.token) {
        config.headers.xToken = "token";
    };
    return config;
});

/* 处理退出响应拦截器 */
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        const res = response.data;
        /* 如果 code 是-1 说明用户注销 或者 或者token已经过期了 */
        /* 需要消除localStoreage 和 清除vuex的token */
        if (res.code === -1) {
            clearHandler();
        }
    }
    return response;
}, 
err=> {
    /*判断一下未授权 */
    if(err.response.state === 401) {
        clearHandler();
    }
});
function clearHandler() {
    localStorage.removeItem("token");
    store.commit("setToken", "");
    /* 跳转到登录页面 */
    router.push({
        path: "/login",
        query: {
            redirect: router.currentRoute.path
        }
    });
}
