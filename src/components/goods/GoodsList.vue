<template>
    <div class="goods-list">
        <div class="goods-item" v-for="item in goodslist" :key="item.id">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                goodslist : [],
                pageindex : 1 //  页数
            }
        },
        created(){
            this.getGoodsList()
        },
        methods: {
            getGoodsList(){
                this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(data => {
                    if(data.body.status == 0) {
                        this.goodslist = this.goodslist.concat(data.body.message)
                    } else {
                        Toast('图片列表数据获取失败...')
                    }
                })
            },
            getMore(){
                this.pageindex++;
                this.getGoodsList();
            }
        }
    }
</script>

<style scoped lang="scss">
    .goods-list {
        padding: 7px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
            }
            .info {
                background-color: #eee;
                .price {
                    .now {
                        color : red;
                        font-size: 16px;
                        font-weight: 700;
                    }
                    .old {
                        font-size: 12px;
                        text-decoration: line-through;
                        margin-left: 10px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>