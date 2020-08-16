<template>
  <a-layout-sider
    class="full-height"
    :theme="theme"
    v-model="collapsed"
    :trigger="null"
    collapsible
  >
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" height="100%">
      <span v-if="!collapsed">demo-admin</span>
    </div>
    <menus-tree></menus-tree>
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import MenusTree from './MenusTree'

export default {
  name: 'basic-sider',
  components: { MenusTree },
  computed: {
    ...mapState(['collapsed', 'theme']),
  },
}
</script>

<style lang="scss" scoped>
.full-height {
  height: 100%;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;

  span {
    margin: 0 10px;
  }
}
</style>>
