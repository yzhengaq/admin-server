<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="triggerCollapsed"
      />
    </a-layout-header>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'basic-header',
  data () {
    return {}
  },
  computed: {
    ...mapState(['collapsed']),
  },
  methods: {
    triggerCollapsed () {
      this.$store.commit('setCollapsed')
    },
  },
}
</script>

<style lang="scss" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
