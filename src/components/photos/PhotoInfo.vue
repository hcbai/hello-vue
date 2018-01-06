<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="sutitle">
            <span>发表时间：{{ photoinfo.add_time | dataFormat }}</span>
            <span>点击了：{{ photoinfo.click }}次</span>
        </p>

        <!-- 缩略图区域 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in list" 
        :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    //加载评论子组件
    import comment from '../subcomponents/comment.vue'
    
    export default {
        data() {
            return {
                id : this.$route.params.id,  //从路由获取ID
                photoinfo : {},  //图片详情
                list : []  //缩略图数组
            }
        },
        created(){
            this.getImgInfo();
            this. getThumbs();
        },
        methods: {
            getImgInfo(){
                this.$http.get('api/getimageInfo/' + this.id).then(data => {
                    // console.log(data.body)
                    if(data.body.status == 0) {
                        this.photoinfo = data.body.message[0]
                    } else {
                        Toast('获取失败...')
                    }
                })
            },
            getThumbs(){
                this.$http.get('api/getthumimages/' + this.id).then(data => {
                     if(data.body.status == 0) {
                        // this.list = data.body.message
                        data.body.message.forEach(item => {
                            item.w = 600;
                            item.h = 400;
                        });
                        this.list = data.body.message;
                    } else {
                        Toast('获取失败...')
                    }
                })
            }
        },
        components: {
            //加载评价子组件
            'cmt-box' : comment
        }
    }
</script>

<style scoped lang="scss">
    .photoinfo-container {
        padding:3px;
        h3 {
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .sutitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content {
            font-size: 13px;
            line-height: 30px;
        }
        .thumbs{
            img{
                margin: 10px;
                box-shadow: 0 0 8px #999;
            }
        }
    }
</style>