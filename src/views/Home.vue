<template>
    <div class="home">
        {{ home }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: "this is a home page"
        }
    },
    async created () {
        const res =await this.$http.get("/api/test");
        console.log(res);
    }
};
</script>
