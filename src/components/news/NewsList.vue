<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dataFoemat}}</span>
                            <span>被点击了：{{item.click}}次</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newslist:[]
            }
        },
        created(){
            this.getNewsList()
        },
        methods: {
            getNewsList(){
                this.$http.get('api/getnewslist').then(data => {
                    // console.log(data.body)
                    if(data.body.status == 0) {
                        this.newslist = data.body.message
                    } else {
                        Toast('新闻列表获取失败...')
                    }                   
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .mui-table-view {
        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            color: skyblue
        }
    }
</style>