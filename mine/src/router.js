import Vue from 'vue'
import Router from 'vue-router'
import Mine from './views/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mime',
      component: Mine
    },
    {
      path: '/resume',
      name: 'resume',
      // 路由级代码拆分
      // 这将为此路由生成一个单独的块（about.[hash].js）。
      // 当路线被访问时，它被延迟加载。
      component: () => import('./views/Resume.vue')
    }
  ],
  mode: 'history'
})
