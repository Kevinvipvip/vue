import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/seccond/Home'
import Collection from './components/seccond/Collection'

// import {UrlSearch} from "./myData/data"; //导航栏Url截取


// 阻止启动生产消息，常用作指令
Vue.config.productionTip = false
Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
    routes:[
        {path:"/",component:Home},
        {path:"/collection",component:Collection}
    ],
    mode:'history'
})
// let Request = new UrlSearch(); //方法实例化
// // 挂载到全局
// Vue.prototype.$Request = Request;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
