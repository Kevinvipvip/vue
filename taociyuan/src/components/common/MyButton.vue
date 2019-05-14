<template>
    <div class="my-button" :style="'margin:'+margin">
        <a :href="link"
           @mouseover="overShow"
           @mouseout="outHide"
           v-bind:class="changeClass == 1?'on':''">{{text}}</a>
    </div>
</template>

<script>
    export default {
        name: 'MyButton',
        props:{
            text:String,
            link:String,
            margin:String
        },
        data() {
            return {
                historyNavId:0,
                changeClass:0
            }
        },
        methods:{
            overShow(){
                this.historyNavId=this.changeClass;
                this.changeClass = 1;
            },
            outHide(){
                this.changeClass = this.historyNavId;
            },
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
    .my-button .on{
        background: #905223;
        color: #fff;
    }
</style>
