<template>
    <div class="footer-box">
        <div class="footer">
            <div class="footer-cont">
                <div class="footer-link-box">
                    <ul class="about-us">
                        <li class="title">关于我们</li>
                        <li v-for="v in about">
                            <router-link :to="v.linkUrl" tag="a">{{v.name}}</router-link>
                        </li>
                    </ul>
                    <ul class="help">
                        <li class="title">帮助与支持</li>
                        <li v-for="v in help">
                            <router-link :to="v.linkUrl">{{v.name}}</router-link>
                        </li>
                    </ul>
                    <ul class="link-box">
                        <li class="title">友情链接</li>
                        <li class="link-box-cont">
                            <span>博物馆相关链接</span>
                            <i></i>
                            <div class="bwg-link">
                                <a v-for="v in bwgArray" target="_blank" :href="v.link">{{v.name}}</a>
                            </div>
                        </li>
                        <li class="link-box-cont">
                            <span>政府相关链接</span>
                            <i></i>
                            <div class="bwg-link">
                                <a v-for="v in zfArray" :href="v.link" target="_blank">{{v.name}}</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="footer-logo">
                    <img src="../../assets/tcylogo.png" />
                </div>
            </div>
            <div class="footer-cont">
            </div>
        </div>
        <Copyright year="2018" company="天津陶瓷院" record="津ICP备18018917号-1"></Copyright>
    </div>
</template>

<script>
import Copyright from "./Copyright"

export default {
    name: 'Footer',
    props:{
        about:Array,
        help:Array
    },
    data(){
        return{
            bwgArray:[
                {
                    link:"www.baidu.com",
                    name:'百度'
                },{
                    link:"www.taobao.com",
                    name:'淘宝'
                },{
                    link:"www.jd.com",
                    name:'京东'
                }
            ],
            zfArray:[
                {
                    link:"www.baidu.com",
                    name:'百度'
                },{
                    link:"www.taobao.com",
                    name:'淘宝'
                },{
                    link:"www.jd.com",
                    name:'京东'
                }
            ]
        }
    },
    components:{
        Copyright
    }
}
</script>
<!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
<style scoped>
    .footer{
        width: 1300px;
        margin: 30px auto;
        display: flex;
        justify-content: space-around;
    }
    .footer-cont{
        width: 50%;
    }
    .footer-link-box{
        display: flex;
        justify-content: start;
    }
    .footer-link-box ul{
        width: 30%;
    }
    .footer-link-box li{
        font-size: 14px;
        text-align: center;
        line-height: 24px;
        border-right: 1px solid #ccc;
    }
    .footer-link-box ul .title{
        font-weight: bold;
        padding-bottom: 10px;

    }
    .footer-link-box li a{
        color: #999;
    }
    .footer-link-box .link-box li{
        border: none;
    }
    .footer-link-box .link-box{
        width: 40%;
    }
    .footer-link-box .link-box .link-box-cont{
        position: relative;
        height: 30px;
        color: #999;
        line-height: 30px;
        border: 1px solid #999;
        border-radius: 5px;
        margin: 0 25px 10px;
    }
    .link-box .link-box-cont i{
        position: absolute;
        display: block;
        width: 30px;
        height: 30px;
        top: 0;
        right: 0;
        background: url("../../assets/down-icon.png") no-repeat center;
        background-size: 30%;
    }
    .link-box .link-box-cont a{
        color: #000;
        line-height: 24px;
        white-space: nowrap;
        overflow: hidden;
    }
    .link-box .link-box-cont a,.link-box .link-box-cont span{
        display: block;
        margin: 0 20px;
        text-align: left;
    }
    .link-box .link-box-cont .bwg-link{
        display: none;
        position: absolute;
        top: 30px;
        left: -1px;
        right: -1px;
        z-index: 999;
        border: 1px solid #ccc;
        background: #fff;
    }
</style>
