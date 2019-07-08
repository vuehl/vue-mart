<template>
    <div class="home">
        <k-header title="你好呀"></k-header>
        {{ home }}
        {{ persion.serias.judge }}
        <cube-button @click="handleClick">全局测试</cube-button>
    </div>
</template>

<script>
let ccc = "this is a home";
let judge = "this is a judge";
export default {
    data() {
        return {
            home: ccc,
            persion: {
                serias: {
                    judge: judge
                }
            }
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
