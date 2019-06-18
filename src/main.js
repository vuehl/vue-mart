import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import KHeader from "./components/Header.vue";
import notice from "@/services/notice";
import "./interceptor";
import "./cube-ui";

// 全局引入页头 这个样子 在任何地方都可以直接使用了
Vue.component("k-header", KHeader);

// 也可以通过cube-ui 的createAPI 来创建全局的使用方法

// 全局使用 notice 消息机制
Vue.prototype.$notice = notice;

// 创建$createNotice API
//import {createAPI} from "cube-ui";
// createAPI(Vue, Notice, true); // 参数3表示单例模式

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
