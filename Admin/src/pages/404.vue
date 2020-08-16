<template>
  <div>
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <a-button type="primary" @click="goBackHome">
          Back Home
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  name: '404',
  methods: {
    goBackHome () {
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style>

</style>
