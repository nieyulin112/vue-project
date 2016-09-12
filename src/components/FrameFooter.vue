<template>
  <div class="">
      <!--配置成底部的东西-->
      <tabbar>
          <tabbar-item v-link="{name: 'home'}">
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item v-link="{name: 'message'}">
            <span slot="label">消息</span>
          </tabbar-item>
          <tabbar-item v-link="{name: 'my'}">
            <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>
  </div>
</template>
<script>
import {Tabbar, TabbarItem} from 'vux/src/components';
export default {
    components: {
        Tabbar,
        TabbarItem
    }
};
</script>
