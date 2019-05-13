<template>
    <div class="img-box">
        <img :src="src" alt="">
    </div>
</template>

<script>
    export default {
        name: "IndexImage",
        props:{
            src:String
        },
    }
</script>

<style scoped>
    .img-box img{
        width: 100%;
        display: block;
    }
</style>