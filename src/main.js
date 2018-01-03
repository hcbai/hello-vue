//入口文件
import Vue from 'vue'

//导入入口文件
import App from './App.vue'

//导入 mui 文件
import './lib/mui/css/mui.min.css'

//按需导入 mint-ui 组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

let vm = new Vue({
    el:'#app',
    render : c => c(App)
})













