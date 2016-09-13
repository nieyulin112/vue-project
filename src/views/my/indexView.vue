<template>
    <div class="my-index-view">
        <x-header class = "bg-black" :right-options="{showMore: true}" @on-click-more="showMenus = true">
            我
        </x-header>
        <group>
            <cell :title = name :inline-desc = 'account' is-link>
                <img slot="icon" width="60" src="http://placeholder.qiniudn.com/60x60/3cc51f/ffffff">
            </cell>
        </group>
        <!--基本的配置项-->
        <group>
            <cell title="我的主题" is-link>
                <img slot="icon" class="base-item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
            <cell title="我的收藏" is-link v-link="{name: 'collect'}">
                <img slot="icon" class="base-item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
            <cell title="我的消息" is-link>
                <img slot="icon" class="base-item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
        </group>
        <foot-bar>
        </foot-bar>
    </div>
</template>

<script>
import Group from 'vux/src/components/group';
import Cell from 'vux/src/components/cell';
import FootBar from '../../components/FrameFooter.vue';
import Panel from 'vux/src/components/panel';
import XHeader from 'vux/src/components/x-header';
export default {
    components: {
        Group,
        Cell,
        FootBar,
        Panel,
        XHeader
    },
    data () {
        return {
            name: 'nick',
            account: '账号:18616340293'
        };
    }
};
</script>

<style lang="less">
    .my-index-view{
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
