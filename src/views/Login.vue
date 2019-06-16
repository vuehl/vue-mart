<template>
    <div>
        <cube-form 
            :model="model" 
            :schema="schema"
            @validate="handleValidata" 
            @submit="handleSubmit"
        >
        </cube-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            model: {
                username: "",
                password: ""
            },
            schema: {
                fields: [
                    {
                        type: "input",
                        modelKey: "username",
                        label: "用户名",
                        props: {
                            placeholder: "请输入用户名"
                        },
                        rules: {
                            required: true
                        },
                        trigger: "blur",
                        messages: {
                            required: "用户名为必填项"  // 这个是当rules 里面的required 触发时
                        }
                    },
                    {
                        type: "input",
                        modelKey: "password",
                        label: "密码",
                        rules: {
                            required: true
                        },
                        props: {
                            placeholder: '请输入密码',
                            type: "password"
                        },
                        rules: {
                            required: true
                        },
                        messages: {
                            required: "密码为必填项"
                        }
                    },
                    {
                        type: "submit",
                        label: "登录"
                    }
                ]
            }
        }
    },
    methods: {
        handleValidata(ret) {
           //console.log(ret);
        },
        async handleSubmit(e) {
            e.preventDefault();
            // get 方式请求
            // const res = await this.$http.get("/api/login", {params: {
            //     username: this.model.username,
            //     password: this.model.password
            // }})
            // post 方式请求
             const res = await this.$http.post("/api/login", {
                username: this.model.username,
                password: this.model.password
            })
            const { code, token, messages } = res.data;
            // 判断状态码 如果登录成功
            if (code === "00000000") {
                // 设置 localStorage 
                localStorage.setItem("token", token);
                // 保存在 store里面
                this.$store.commit("setToken", token);
            } else {
            // 登录失败
                const toast = this.$createToast({
                    time: 1000,
                    txt: messages || "用户名或密码错误",
                    type: "error"
                })
                toast.show()
            }
        }
    },
}
</script>


<style scoped>

</style>

