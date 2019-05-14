<template>
    <div class="tabBar-content-box">
        <ul>
            <li v-for="v in content">
                <a href="javascript:void(0);">
                    <div class="img-box" v-if="image"><img v-on:progress="showImage(type)" v-bind:id="type" :src="imgUrl" /></div>
                    <h3>{{v.title}}</h3>
                    <span>{{v.create_time}}</span>
                    <div class="xian"></div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import img1 from '../../assets/news-default1.jpg'
    import img2 from '../../assets/news-default2.jpg'
    import img3 from '../../assets/news-default3.jpg'
    export default {
        name: "TabBarContent",
        props:{
            content:Array,
            image:Boolean,
            type:Number
        },
        data(){
            return{
                typeId:"",
                imgUrl:''
            }
        },
        watch:{//非常重要，不然为空
            type:function(newVal,oldVal){
                this.typeId = newVal;
                this.showImage()
            }
        },
        mounted:function () {
        },
        methods:{
            showImage(){
                if (this.typeId == 1){
                    this.imgUrl = img1
                }else if (this.typeId == 2){
                    this.imgUrl = img2
                }else if(this.typeId == 3){
                    this.imgUrl = img3
                }
            }
        }
    }
</script>

<style scoped>
    .tabBar-content-box{
        margin-top: 30px;
    }
    .tabBar-content-box ul{
        display: flex;
        justify-content: space-around;
    }
    .tabBar-content-box ul li{
        width: 24%;
        background: #ffffff;
    }
    .tabBar-content-box a{
        display: block;
    }
    .img-box img{
        width: 100%;
        display: block;
    }
</style>
