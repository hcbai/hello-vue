<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="newBB"></textarea>
        <mt-button type="primary" size="large" @click="setCmtList">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in cmtlist" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat}}
                </div>
                <div class="cmt-body">
                   {{ item.content == '' ? '此用户很懒，啥都没说' : item.content }}
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" plain @click="moreList">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';    
    export default {
        data(){
            return {
                cmtlist : [],
                pageindex : 1,
                newBB : ''
            }
        },
        props:['Id'],
        created(){
            this.getCmtList()
        },
        methods: {
            getCmtList(){
                this.$http.get('api/getcomments/' + this.Id + '?pageindex=' + this.pageindex).then(data => {
                    // console.log(data.body);
                    if(data.body.status == 0 ){
                        //数据应该是拼接而不是覆盖
                        this.cmtlist = this.cmtlist.concat(data.body.message)
                    } else {
                        Toast('获取评论失败...')
                    }
                })
            },
            moreList(){
                this.pageindex++;
                this.getCmtList();
            },
            setCmtList(){
                this.$http.post('api/postcomment/' + this.Id , {content:this.newBB}).then(data => {
                    // console.log(data.body)
                    if(data.body.status == 0 ){
                        this.cmtlist.unshift({user_name:'匿名用户', add_time:Date.now(), content:this.newBB});
                        this.newBB = '';
                        // Toast('评论提交成功')
                        Toast({
                            message: '评论提交成功',
                            duration: 2000
                        });
                    } else {
                        // Toast('')
                        Toast({
                            message: '评论提交失败...',
                            duration: 2000
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>