<template>
    <div class="home">
        <slider ref="slider" :options="options">
            <slideritem v-for="(item,index) in someList" :key="index" :style="'background:url('+item.pic+')no-repeat center'"></slideritem>
            <div slot="loading">loading...</div>
        </slider>
        <div class="tcy-brief-box">
            <div class="tcy-cont-box">
                <div class="tcy-cont">
                    <div class="text-box">
                        <TitleText english="" text="天津陶瓷院" :show="show"></TitleText>
                        <ShortEssay :text="textOne" type="0"></ShortEssay>
                    </div>
                    <MyButton link="javascript:void(0)" text="进入详情"></MyButton>
                </div>
                <div class="brief-img-box">
                    <IndexImage src="http://tjtcy.cn/tcymuseum/images/dtll.jpg"></IndexImage>
                </div>
            </div>
            <div class="tcy-cont center-box">
                <div class="text-box">
                    <TitleText english="VISITING" text="游览须知" :show="!show"></TitleText>
                    <ShortEssay :text="textTwo" type="0"></ShortEssay>
                    <p>地址：<span>天津市西青区西苑别墅B区13号</span></p>
                </div>
                <MyButton link="javascript:void(0)" text="进入详情"></MyButton>
            </div>
            <div class="tcy-cont tcy-change">
                <TitleText english="SOUVENIR" text="文创产品" :show="!show"></TitleText>
                <div class="wenchuang-img">
                    <IndexImage src="http://tjtcy.cn/tcymuseum/images/tcywc.jpeg"></IndexImage>
                </div>
            </div>
        </div>
        <div class="news-box">
            <div class="news-cont">
                <myTabBar :tab="newsArry" route-link="/collection"></myTabBar>
            </div>
        </div>

    </div>
</template>

<script>
    import { slider, slideritem } from 'vue-concise-slider'
    import TitleText from './components/common/TitleText'
    import ShortEssay from './components/common/ShortEssay'
    import MyButton from './components/common/MyButton'
    import IndexImage from './components/common/IndexImage'
    import axios from 'axios'
    import MyTabBar from "./components/common/MyTabBar"

    export default {
        name: 'home',
        data() {
            return {
                someList:[],
                options: {
                    currentPage: 0,
                    autoplay:5000,
                    loop:true
                },
                textOne:"陶瓷院博物馆成立于2018年7月5日坐落于天津市西青区西苑别墅B区13号，建筑面积1000多平米，截止目前为止已用将近3亿片老瓷片，耗时40万工时。地理位置毗邻西青区侯台水西公园，运河区，曹庄花市等，内部由假山、流水、喷泉及富有时代特点的磨盘、碾砣装饰装修，室内外使用宋元至民国时期各窑址老瓷片、瓷盘、瓷瓶装饰凉亭走廊，墙面、屋顶由老瓷片拼接成各种造型图案，如敦煌飞天、万里长城、嫦娥奔月、古代四大美女、道教八宝、福禄寿喜财、青龙、麒麟、马踏飞燕等百余张其中“天津记忆”尤为突出，另外馆内使用的家具、门窗、展台、座椅均为清代或者民国时期的老物件。",
                textTwo:"开放时间：",
                show:false,
                newsArry:[
                    {
                        id:1,
                        name:"新闻"
                    },{
                        id:2,
                        name:"公告"
                    },{
                        id:3,
                        name:"展讯"
                    }
                ]
            }
        },
        mounted:function(){
            this.getSwiper();
            this.getTCYBrief();
            this.getTcyVisitTips();
        },
        methods:{
            getSwiper(){
                axios.post("http://tjtcy.cn/index.php?m=Home&c=Index&a=index").then((res)=>{
                    let swiperArry = res.data.data.list;
                    let style = {};
                    if (res.data.code == 1){
                        for (let i = 0; i < swiperArry.length; i++){
                            if (swiperArry[i].pic){
                                swiperArry[i].pic = 'http://tjtcy.cn'+swiperArry[i].pic
                                // swiperArry[i].style = style
                                // swiperArry[i].html = ""
                                // swiperArry[i].style.background = "url('http://tjtcy.cn/"+ swiperArry[i].pic+"')no-repeat center"
                            }
                        }
                        this.someList = swiperArry
                    }else {
                        alert(res.data.message)
                    }
                })
            },
            getTCYBrief(){
                axios.post("http://tjtcy.cn/index.php?m=Home&c=Index&a=getTcyIntro").then((res)=>{
                    if (res.data.code == 1){
                        this.textOne = res.data.data.intro
                    } else {
                        alert(res.data.message)
                    }
                })
            },
            getTcyVisitTips(){
                axios.post("http://tjtcy.cn/index.php?m=Home&c=Index&a=getTcyVisitTips").then((res)=>{
                    if (res.data.code == 1){
                        this.textTwo = res.data.data.visit_tips
                    } else {
                        alert(res.data.message)
                    }
                })
            }
        },
        components: {
            slider,
            slideritem,
            TitleText,
            ShortEssay,
            MyButton,
            IndexImage,
            MyTabBar
        }
    }

</script>

<!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
<style scoped>
    .home{
        width:100%;
        height:620px
    }
    .tcy-brief-box{
        width: 1300px;
        margin: 50px auto;
        display: flex;
        justify-content: start;
    }
    .tcy-cont-box{
        width: 50%;
        display: flex;
        padding-right: 15px;
        justify-content: space-between;
    }
    .tcy-cont-box .tcy-cont{
        width: 60%;
        padding: 0;
    }
    .tcy-cont{
        padding: 0 15px;
        width: 30%;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    .center-box{
        border-left: 1px solid #dfccbd;
        border-right: 1px solid #dfccbd;
    }
    .tcy-change{
        width: auto;
        justify-content: start;
    }
    .wenchuang-img{
        width: 150px;
    }
    .brief-img-box{
        width: 35%;
    }
    .text-box p{
        margin-top: 5px;
        font-size: 14px;
        color: #686868;
        line-height: 24px;
        font-weight: bold;
    }
    .text-box p span{
        font-weight: normal;
    }
    .news-box{
        background: url("./assets/news-bg.jpg")no-repeat center;
        overflow: hidden;
    }
</style>
