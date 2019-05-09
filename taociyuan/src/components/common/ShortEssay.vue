<template>
    <p class="short-essay">
        {{text}}
    </p>
</template>

<script>
    export default {
        name: 'ShortEssay',
        props:{
            text:String
        },
        data() {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .short-essay {
        font-size: 24px;
    }
</style>
