<template>
    <div class="home">
        <k-header title="你好呀"></k-header>
        {{ home }}
        <cube-button @click="handleClick">全局测试</cube-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: "this is a home page"
        };
    },
    methods: {
        handleClick() {
            this.$notice.info({
                duration: 2,
                content: "这是一些弹出信息"
            });
        }   
    }
    // async created () {
    //     const res = await this.$http.get("/api/test");
    //     //console.log(res);
    // }
};
</script>
