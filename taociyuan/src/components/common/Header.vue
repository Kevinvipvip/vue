<template>
  <div class="header">
    <div class="header-box">
      <div class="logo"><a href="/"><img :src="image" /></a></div>
      <div class="nav-box">
        <ul class="nav">
          <li
            v-for="item in nav"
            :class="item.id == navId?'on':''"
            @click="changeNavId(item.id)"
            :style="'width:' + listWidth"
            @mouseover="overShow(item.id)"
            @mouseout="outHide"
          >
            <router-link :to="item.linkUrl">{{item.text}}<span>{{item.EnglishText}}</span></router-link>
            <ul>
              <li v-for="i in item.second"><router-link :to="i.link_url">{{i.text}}</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import imgUrl from '../../assets/tcylogo.png'

var historyNavId;

export default {
  name: 'Header',
  props: {
      nav:Array,
  },
  data(){
    return{
        navId:0,
        image: imgUrl,
        listWidth:''
    }
  },
  mounted(){
    let length = this.nav.length;
    let width = 1100/length
    this.listWidth = width + '%';
  },
  methods:{
      overShow(num){
          historyNavId=this.navId;
          this.navId = num;
      },
      outHide(){
          this.navId = historyNavId;
      },
      changeNavId(id){
          historyNavId=id;
          this.navId = id;
      },
      // getUrlPath(){
      //     let contId=this.$route.params.id
      //     if (contId === this.nav[contId].id){
      //         this.contShow = true;
      //     }
      //     console.log(contId)
      // }
  }
}
</script>

<!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
<style scoped>
  .header{
    overflow: hidden;
    height: 111px;
    border-bottom: 4px solid #5e8f8c;
    background: #fbf8f1;
  }
  .header-box{
    width: 1350px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .logo{
    width: 185px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo a{
    display: block;
    width: 100%;
    height: 83px;
  }
  .logo img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .nav-box{
    width: 1100px;
    height: 100%;
  }
  .nav{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
  .nav li{
    position: relative;
    height: 100%;
  }
  .nav a{
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 100%;
    text-align: center;
    font-size: 16px;
    color: #8e4c2c;
    font-weight: bold;
  }
  .nav a span{
    display: block;
    font-size: 10px;
    color: #7f7e7a;
    font-weight: normal;
    line-height: 14px;
    margin-top: 4px;
    letter-spacing: 1px;
  }
  .nav .on{
    background: url("../../assets/nav-hover1.jpg") no-repeat;
  }
  .nav .on a{
    color: #fff;
  }
  .nav .on a span{
    color: #fff;
  }
</style>
