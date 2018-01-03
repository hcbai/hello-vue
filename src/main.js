//入口文件
import Vue from 'vue'
//导入入口文件
import App from './App.vue'

//引入路由的包
import VueRouter from 'vue-router'
//挂载到 Vue 上
Vue.use(VueRouter)
//导入路由文件
import router from './router.js'

//导入 vue-resource 包 获取ajax请求
import VueRescource from 'vue-resource'
Vue.use(VueRescource)

//轮播图 HomeContainer 
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入 mui 文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入 mint-ui 组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

let vm = new Vue({
    el:'#app',
    render : c => c(App),
    router
})













