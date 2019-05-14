<template>
    <div class="copyright-box">
        <p>Copyright©<span>{{year}}</span>-<span>{{company}}</span> 版权所有.&nbsp;&nbsp;&nbsp;
            <a href="javascript:void (0);">备案号：<span>{{record}}</span></a></p>
    </div>
</template>

<script>
    export default {
        name: "Copyright",
        props:{
            year:String,
            company:String,
            record:String
        }
    }
</script>

<style scoped>
    .copyright-box,.copyright-box a{
        background: #408f96;
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        color: #b2dfe5;
        text-align: center;
    }
</style>
