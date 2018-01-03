<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt=""> 
                <div class="mui-media-body">新闻资讯</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt=""> 
                <div class="mui-media-body">图片分享</div></a>
            </li> 
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt=""> 
                <div class="mui-media-body">商品购买</div></a>
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
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(data => {
                    // console.log(data.body.message)
                    if(data.body.status === 0) {
                        this.lunbotuList = data.body.message;
                    } else {
                        Toast('图片加载失败...')
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
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