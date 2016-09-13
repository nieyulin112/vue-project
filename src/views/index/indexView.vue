<template>
    <div class="index-view">
        <x-header class = "bg-black" :left-options="{showBack: false}"
        :right-options="{showMore: false}" @on-click-more="showMenus = true">
            首页
        </x-header>
        <foot-bar>
        </foot-bar>
    </div>
</template>

<script>
import Group from 'vux/src/components/group';
import Cell from 'vux/src/components/cell';
import FootBar from '../../components/FrameFooter.vue';
import XHeader from 'vux/src/components/x-header';
export default {
    components: {
        Group,
        Cell,
        FootBar,
        XHeader
    },
    data () {
        return {
        };
    }
};
</script>

<style lang="less">
    .index-view{
        .bg-black{
            background-color: #000;
        }
    }
</style>
