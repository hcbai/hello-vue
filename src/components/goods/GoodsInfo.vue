<template>
    <div class="goodslist-container">
        <!-- 轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
                </div>
            </div>
        </div>

        <!-- 商品主体区域 -->
        <div class="mui-card">
            <div class="mui-card-header">标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">市场价：￥<del>2699</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span></p>
                    <p>购买数量：<numbox></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>

    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import swiper from '../subcomponents/Swiper.vue'
    import numbox from '../subcomponents/GoodsInfoNumberBox.vue'

    export default {
        data(){
            return {
                lunbotuList : [],
                id : this.$route.params.id
            }
        },
        created(){
            this.getLunList()
        },
        methods: {
            getLunList(){
                this.$http.get('api/getthumimages/' + this.id).then(data => {
                    // console.log(data.body.message)
                    if(data.body.status === 0) {
                        data.body.message.forEach(item => {
                            item.img = item.src
                        });
                        this.lunbotuList = data.body.message;
                        // console.log(this.lunbotuList)
                    } else {
                        Toast('图片加载失败...')
                    }
                })
            }
        },
        components: {
            swiper,
            numbox
        }
    }
</script>

<style scoped lang="scss">
    .goodslist-container {
        background-color: #eee;
        overflow: hidden;
        .now_price {
            font-size: 16px;
            color:red;
        }
        .mui-card-footer {
            display: block;
            button {
                margin: 15px 0;
            }
        }
        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top: 390px;
            left: 146px;
        }
    }
</style>