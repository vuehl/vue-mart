import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: localStorage.getItem("token") || ""
    },
    mutations: {
        // 设置 token,改变token的方法
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {}
});

// 订阅者模式 监听store的变化
store.subscribe((mutation, state) => {
    switch (mutation.type) {
    case "setToken":
        localStorage.setItem("token", JSON.stringify(state.token));
        break;
    }
});

export default store;
