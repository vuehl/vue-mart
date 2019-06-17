<template>
    <div id="app">
        <transition name="route-move">
            <router-view class="child-view" />
        </transition>
        
        <cube-tab-bar
            show-slider
            v-model="selectLable"
            :data="tabs"
            @change="changeHandler">
        </cube-tab-bar>
    </div>
</template>

<script>
export default {
    created() {
        // 初始化页签 就是在页面上输入路由 页签也跳转
        this.selectLable = this.$route.path;
    },
    watch: {
        // 路由发生变化是 tabs同步更新
        $route (route) {
            this.selectLable = route.path;
        }
    },
    data() {
        return {
            token: this.$store.state.token,
            selectLable: "/",
            tabs: [{
                label: "Home",
                value: "/",
                icon: "cubeic-home"
            }, {
                label: "Cart",
                value: "/cart",
                icon: "cubeic-mall"
            }, {
                label: "Me",
                value: "/login",
                icon: "cubeic-person"
            }]
        }
    },
    methods: {
        async handleLoginout() {
           const res = await this.$http.post("/api/loginout"); 
        },
        changeHandler (val) {
            this.$router.push(val);
        }
    },
}
</script>

<style>
    .cube-tab-bar {
        position: fixed !important;
        left: 0;
        right: 0;
        bottom: 0;
        background: #edf0f4;
    }
    .cube-tab-bar-slider {
        top: 0;
    }

    /* 入场前 */
    .route-move-enter {
        transform: translate3d(-100%, 0, 0);
    }
    /* 出场后 */
    .route-move-leave-to {
        transform: translate3d(100%, 0, 0);
    }
    /* 场内执行 */
    .route-move-enter-active,
    .route-move-leave-active {
        transition: transform 0.3;
    }

    .chile-view {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        padding-bottom: 36px;
    }
</style>

