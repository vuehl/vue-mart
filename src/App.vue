<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
import axios from "axios";
export default {
    async created() {
        const ret = await axios.get("/api/test");
        console.log(ret);
    }
}
</script>

