<template>
  <a-layout id="baisc-layout-wrapper">
    <basic-sider></basic-sider>
    <a-layout class="full-height">
      <basic-header></basic-header>
      <a-layout-content class="basic-layout-content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import BasicHeader from '@/components/BasicHeader/index.vue'
import BasicSider from '@/components/BasicSider/index.vue'

export default {
  name: 'baisc-layout',
  components: { BasicHeader, BasicSider },
  data () {
    return {}
  },
  computed: {
    ...mapState(['collapsed', 'theme']),
  },
}
</script>

<style lang="scss">
#baisc-layout-wrapper {
  height: 100%;

  .basic-layout-content {
    margin: 20px;
    padding: 20px;
    background: #fff;
    min-height: 280px;
  }

  .full-height {
    height: 100%;
  }
}

</style>
