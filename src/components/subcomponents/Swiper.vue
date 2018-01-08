<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        props : ['lunbotuList', 'isfull']
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        text-align: center;
        height: 200px;
        .mint-swipe-item {
            img {
                // width: 100%;
                height: 100%;
            }
        }
    }
    .full {
        width: 100%;
    }
</style>