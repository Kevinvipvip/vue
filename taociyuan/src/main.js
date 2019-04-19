import Vue from 'vue'
import App from './App.vue'
import {UrlSearch} from "./myData/data"; //导航栏Url截取

let Request = new UrlSearch(); //方法实例化

// 阻止启动生产消息，常用作指令
Vue.config.productionTip = false

// 挂载到全局
Vue.prototype.$Request = Request;

new Vue({
  render: h => h(App),
}).$mount('#app')
