<template>
    <div class="app-main">

        <!-- 顶部 header 部分 -->
        <mt-header fixed title="Vue项目"></mt-header>

        <!-- 中间路由 router-view 部分 -->
        <h1>这是APP组件</h1>



        <!-- 底部 tabbar 部分 -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>

    </div>
</template>

<script>

    export default {
        data(){
            return {
              
            }
        },
        created () {
         
        },
        methods: {
           
        }
    }
</script>

<style scoped lang="scss">
    .app-main {
        padding: 40px 0 50px
    }
</style>