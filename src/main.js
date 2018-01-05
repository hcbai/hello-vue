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
//设置 根路径
Vue.http.options.root = 'http://vue.studyit.io/'
Vue.http.options.emulateJSON = true

//导入格式化时间插件
import moment from 'moment'
//定义全局过滤器  定义时间
Vue.filter('dataFormat', function(datastr, pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(datastr).format(pattern)
})

//按需导入 mint-ui 组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//导入 mui 文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


let vm = new Vue({
    el:'#app',
    render : c => c(App),
    router
})













