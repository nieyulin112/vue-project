<template>
    <div class="">
        <div class="vux-demo">
            <img class="logo" src="../../assets/vux_logo.png">
            <h1>{{ msg }}</h1>
        </div>
        <foot-bar>
        </foot-bar>
    </div>
</template>

<script>
import Group from 'vux/src/components/group';
import Cell from 'vux/src/components/cell';
import FootBar from '../../components/FrameFooter.vue';
export default {
    components: {
        Group,
        Cell,
        FootBar
    },
    data () {
        return {
            msg: 'Hello World!'
        };
    }
};
</script>

<style>
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
