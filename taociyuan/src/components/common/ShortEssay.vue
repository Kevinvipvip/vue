<template>
    <div class="short-essay">
        <div class="rich-text" v-html="text" v-if="type == 0"></div>
        <p class="short-essay" v-else>
            {{text}}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'ShortEssay',
        props:{
            text:String,
            type:String //0代表text是富文本，其他数字代表text是纯文本
        },
        data() {
            return {
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .short-essay p,.rich-text{
        font-size: 14px;
        color: #686868;
        line-height: 24px;
        height: 96px;
        overflow: hidden;
    }
</style>
