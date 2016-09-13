<template>
    <div class="collect-index-view">
        <x-header class = "bg-black" :right-options="{showMore: true}" @on-click-more="showMenus = true">
            收藏
        </x-header>
    </div>
</template>

<script>
import Group from 'vux/src/components/group';
import Cell from 'vux/src/components/cell';
import Panel from 'vux/src/components/panel';
import XHeader from 'vux/src/components/x-header';
export default {
    components: {
        Group,
        Cell,
        Panel,
        XHeader
    },
    data () {
        return {
        };
    }
};
</script>

<style lang="less">
    .collect-index-view{
        .bg-black{
            background-color: #000;
        }
        .weui_cells{
            margin-top:0px;
        }
        .vux-no-group-title{
            margin-top:0px;
        }
        .weui_cell_primary{
            padding-left:10px;
        }
        .base-item{
            width:20px;
            display: block;
            margin-right:4px;
        }
    }
</style>
