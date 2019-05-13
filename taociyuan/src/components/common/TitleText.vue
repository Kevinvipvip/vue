<template>
    <h2 class="title-text">
        {{text}}
        <span v-if="show">{{english}}</span>
    </h2>
</template>

<script>
    export default {
        name: 'TitleText',
        props:{
            text:String,
            english:String,
            show:Boolean
        },
        data() {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title-text {
        font-size: 18px;
        color: #8d5526;
        margin-bottom: 12px;
    }
    .title-text span{
        display: block;
    }
</style>
