<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <h1>HomeContainer</h1>
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
            &:nth-child(1){
                background-color:red;
            }
            &:nth-child(2){
                background-color:blue;
            }
            &:nth-child(3){
                background-color:yellow;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>