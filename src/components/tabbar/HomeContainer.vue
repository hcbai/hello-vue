<template>
    <div>
        <!-- 轮播图区域 -->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

        <!-- 图片导航区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt=""> 
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png" alt=""> 
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li> 
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png" alt=""> 
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li> 
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt=""> 
                <div class="mui-media-body">留言反馈</div></a>
            </li> 
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt=""> 
                <div class="mui-media-body">视频专区</div></a>
            </li> 
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt=""> 
                <div class="mui-media-body">联系我们</div></a>
            </li>         
        </ul> 
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import swiper from '../subcomponents/Swiper.vue'

    export default {
        data(){
            return {
                lunbotuList : []
            }
        },
        created(){
            this.getLunList()
        },
        methods: {
            getLunList(){
                this.$http.get('api/getlunbo').then(data => {
                    // console.log(data.body.message)
                    if(data.body.status === 0) {
                        this.lunbotuList = data.body.message;
                    } else {
                        Toast('图片加载失败...')
                    }
                })
            }
        },
        components: {
            swiper
        }
    }
</script>

<style scoped lang="scss">
    
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: 0;
    }
    .mui-grid-view.mui-grid-9 .mui-media {
        border: 0;
        img {
            width: 50%;
            height: 50%;
        }     
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        font-size: 13px
    }
</style>