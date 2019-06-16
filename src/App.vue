<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/login" v-if="!token">Login</router-link>
            <router-link to="/" v-if="token" @click="handleLoginout">LoginOut</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: this.$store.state.token
        }
    },
    methods: {
        async handleLoginout() {
           const res = await this.$http.post("/api/loginout"); 
        }
    },
}
</script>

