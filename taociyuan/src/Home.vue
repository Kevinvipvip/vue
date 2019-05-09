<template>
    <div class="home">
        <slider ref="slider" :options="options">
            <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
                {{item.html}}
            </slideritem>x
            <div slot="loading">loading...</div>
        </slider>
        <TitleText english="KJSDHFUIHKJ" text="啊根据客户的高房价" show="false"></TitleText>
        <ShortEssay :text="text"></ShortEssay>
        <MyButton link="javascript:void(0)" text="进入详情"></MyButton>
    </div>
</template>

<script>
    import { slider, slideritem } from 'vue-concise-slider'
    import TitleText from './components/common/TitleText'
    import ShortEssay from './components/common/ShortEssay'
    import MyButton from './components/common/MyButton'


    export default {
        name: 'home',
        data() {
            return {
                someList:[
                    {
                        html: '',
                        style: {
                            'background': 'url("http://tjtcy.cn/Upload/160821546923129.jpg")no-repeat center'
                        }
                    },
                    {
                        html: '',
                        style: {
                            'background': 'url("http://tjtcy.cn/Upload/869411546923158.jpg")no-repeat center'
                        }
                    },
                    {
                        html: '',
                        style: {
                            'background': 'url("http://tjtcy.cn/Upload/494431546923173.jpg")no-repeat center'
                        }
                    }
                ],
                options: {
                    currentPage: 0,
                    autoplay:5000,
                    loop:true
                },
                text:"爱国覅u可就现场，内裤空间hi库函数的"
            }
        },
        methods:{

        },
        components: {
            slider,
            slideritem,
            TitleText,
            ShortEssay,
            MyButton
        }
    }
</script>

<!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
<style scoped>
    .home{
        width:100%;
        height:620px
    }
</style>
