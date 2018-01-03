//导入 vue-router包
import VueRouter from 'vue-router'



//创建 router 实例 
let router = new VueRouter({
    routes: [ //配置路由规则
        
    ],
    linkActiveClass : 'mui-active' //使用mui默认高亮类名 覆盖router-link默认的类名router-link-active
})

//导出 router 实例
export default router