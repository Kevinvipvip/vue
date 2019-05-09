<template>
    <div class="my-button">
        <a :href="link">{{text}}</a>
    </div>
</template>

<script>
    export default {
        name: 'MyButton',
        props:{
            text:String,
            link:String
        },
        data() {
            return {

            }
        },
        methods:{

        }
    }
</script>

<!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
<style scoped>
    .my-button {
        width: 159px;
        height: 31px;
        background: #e7d7bd;
        text-align: center;
        line-height: 31px;
    }
    .my-button a{
        color: #8b5322;
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
