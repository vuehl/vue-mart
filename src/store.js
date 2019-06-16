import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
