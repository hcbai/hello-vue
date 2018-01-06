<template>
    <div>
        <!-- 顶部导航条部分 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                    <a class="mui-control-item" href="#" data-wid="tab-top-subpage-6.html">
                        科技
                    </a>
                </div>
            </div>
		</div>
    </div>
</template>

<script>
    //引入 mui的js文件
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        data(){
            return {

            }
        },
        mounted(){
            //当页面中的DOM结构加载完执行这个钩子函数 
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            
        }
    }
</script>

<style scoped lang="scss">
    // 让滚动条不再警告
    * { touch-action: pan-y; }
</style>