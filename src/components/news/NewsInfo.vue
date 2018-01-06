<template>
    <div>
        <div class="newsinfo-container">
            <!-- 大标题 -->
            <h3 class="title">{{newsInfoList.title}}</h3>
            <!-- 子标题 -->
            <p class="subtitle">
                <span>发表时间：{{newsInfoList.add_time | dataFormat}}</span>
                <span>点击：{{newsInfoList.click}}次</span>
            </p>
            <!-- 主体内容 -->
            <div class="content" v-html="newsInfoList.content"></div> 
            <!-- 评论子组件 -->
            <comment-box :Id="id"></comment-box>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    //引入评论列表组件
    import comment from '../subcomponents/comment.vue'

    export default {
        data(){
            return {
                id : this.$route.params.id,
                newsInfoList:{}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods: {
            getNewsInfo(){
                this.$http.get('api/getnew/' + this.id).then(data => {
                    // console.log(data.body)
                    if(data.body.status == 0 ){
                        this.newsInfoList = data.body.message[0]
                    } else {
                        Toast('获取新闻失败...')
                    }
                })
            }
        },
        components: {
            'comment-box' : comment
        }
    }
</script>

<style lang="scss">
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>