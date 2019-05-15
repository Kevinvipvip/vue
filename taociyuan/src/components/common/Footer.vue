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
                        <li class="link-box-cont" v-on:click="openLinkList(1)">
                            <span>博物馆相关链接</span>
                            <i></i>
                            <div class="bwg-link" v-bind:style="bwgShowName?'display:none':'display:block'">
                                <a v-for="v in bwgArray" target="_blank" :id="v.id" v-on:click="closeLinkList" :href="v.link">{{v.name}}</a>
                            </div>
                        </li>
                        <li class="link-box-cont" v-on:click="openLinkList(2)">
                            <span>政府相关链接</span>
                            <i></i>
                            <div class="bwg-link" v-bind:style="zfShowName?'display:none':'display:block'">
                                <a v-for="v in zfArray" v-on:click="closeLinkList" :href="v.link" target="_blank">{{v.name}}</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="footer-logo">
                    <img src="../../assets/tcylogo.png" />
                </div>
            </div>
            <div class="footer-cont">
                <div class="flex-right">
                    <div class="tel-box right">
                        <div class="tel-icon"><img src="../../assets/tel.png" /></div>
                        <p>咨询电话<span>028-12365409</span></p>
                    </div>
                </div>
                <div class="flex-right">
                    <div class="address-box right">地址：<span>西青区西苑别墅B区13号</span></div>
                </div>
                <div class="flex-right flex-code">
                    <div class="code-box">
                        <IndexImage src="http://tjtcy.cn/tcymuseum/images/bwgsd.jpeg"></IndexImage>
                        <p>关注博物馆商店</p>
                    </div>
                    <div class="code-box">
                        <IndexImage src="http://tjtcy.cn/tcymuseum/images/tcyewm.jpeg"></IndexImage>
                        <p>关注微信公众号</p>
                    </div>
                </div>
            </div>
        </div>
        <Copyright year="2018" company="天津陶瓷院" record="津ICP备18018917号-1"></Copyright>
    </div>
</template>

<script>
import Copyright from "./Copyright"
import IndexImage from './IndexImage'

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
                    id:1,
                    link:"http://www.baidu.com",
                    name:'百度'
                },{
                    id:2,
                    link:"http://www.taobao.com",
                    name:'淘宝'
                },{
                    id:3,
                    link:"http://www.jd.com",
                    name:'京东'
                }
            ],
            zfArray:[
                {
                    link:"http://www.baidu.com",
                    name:'百度'
                },{
                    link:"http://www.taobao.com",
                    name:'淘宝'
                },{
                    link:"http://www.jd.com",
                    name:'京东'
                }
            ],
            bwgShowName:true,
            zfShowName:true
        }
    },
    methods:{
        openLinkList(num){
            if (num == 1){
                this.bwgShowName = !this.bwgShowName
                if (!this.zfShowName){
                    this.zfShowName = true
                }
            }
            if (num == 2){
                this.zfShowName = !this.zfShowName
                if (!this.bwgShowName){
                    this.bwgShowName = true
                }
            }
        },
        closeLinkList(){
            if (!this.zfShowName){
                this.zfShowName = true
            }
            if (!this.bwgShowName){
                this.bwgShowName = true
            }

        }
    },
    components:{
        Copyright,
        IndexImage
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
        position: absolute;
        top: 30px;
        left: -1px;
        right: -1px;
        z-index: 999;
        border: 1px solid #ccc;
        background: #fff;
    }
    .footer-logo{
        width: 200px;
        margin-left: 110px;
        margin-top: 50px;
    }
    .footer-logo img{
        display: block;
        width: 100%;
    }
    .right{
        float: right;
    }
    .flex-right{
        clear: both;
        overflow: hidden;
    }
    .flex-right .tel-box{
        display: flex;
    }
    .tel-box .tel-icon{
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-right: 1px solid #ccc;
    }
    .tel-box .tel-icon img{
        display: block;
        width: 80%;
        height: 80%;
    }
    .tel-box p{
        font-size: 18px;
        color: #686868;
        margin-right: 50px;
    }
    .tel-box p span{
        display: block;
        font-size: 20px;
        font-weight: bold;
        color: #955317;
    }
    .address-box{
        margin-right: 50px;
        font-size: 16px;
        color: #686868;
        margin-top: 23px;
    }
    .flex-code{
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;
    }
    .flex-code .code-box{
        border: 1px solid #ccc;
        width: 150px;
        height: 150px;
        margin: 20px;
    }
    .flex-code .code-box img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .flex-code .code-box p{
        background: url(../../assets/weixin-icon.png) no-repeat left center;
        padding-left: 28px;
        height: 25px;
        margin-left: 7px;
        line-height: 25px;
        color: #348330;
        background-size: 22px;
    }
</style>
