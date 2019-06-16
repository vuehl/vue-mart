import axios from "axios";

// 全局 添加拦截器 作用是,可以在每个api 前面就加上headers 的token验证
axios.interceptors.request.use(config => {
    if (true) {
        config.headers.xToken = "token";
    }
    return config;
});