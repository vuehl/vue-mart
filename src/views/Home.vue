<template>
    <div class="home">
        {{ home }}
    </div>
</template>

<script>
// import axios from "axios";
export default {
    data() {
        return {
            home: "this is a home page"
        }
    },
    created () {
        // axios.get("/api/test").then((res) => {
        //     const result = res.data;
        //     console.log(result); 
        // });
        this.$http.get("/api/test").then((res)=> {
            const result = res.data;
            console.log(result);
        });
    }
};
</script>
