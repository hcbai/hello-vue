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
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
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
            swiper
        }
    }
</script>

<style scoped lang="scss">
    .goodslist-container {
        background-color: #eee;
        overflow: hidden;
    }
</style>