//导入 vue-router包
import VueRouter from 'vue-router'

//引入 tabbar中的各子组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContaienr from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

import NewsList from './components/news/NewsList.vue'

//创建 router 实例 
let router = new VueRouter({
    routes: [ //配置路由规则
        { path : '/' , redirect : '/home'},
        { path : '/home' , component : HomeContainer },
        { path : '/member' , component : MemberContaienr },
        { path : '/shopcar' , component : SearchContainer },
        { path : '/search' , component : ShopcarContainer },
        { path : '/home/newslist' , component : NewsList }
    ],
    linkActiveClass : 'mui-active' //使用mui默认高亮类名 覆盖router-link默认的类名router-link-active
})

//导出 router 实例
export default router