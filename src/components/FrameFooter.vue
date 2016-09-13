<template>
  <div class="">
      <!--配置成底部的东西-->
      <tabbar>
          <tabbar-item v-link="{name: 'home'}">
            <img slot="icon" src="../assets/icon_nav_cell.png">
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item v-link="{name: 'message'}">
            <img slot="icon" src="../assets/icon_nav_msg.png">
            <span slot="label">消息</span>
          </tabbar-item>
          <tabbar-item v-link="{name: 'my'}">
            <img slot="icon" src="../assets/icon_nav_button.png">
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
