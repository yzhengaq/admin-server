<template>
  <div class="index">
    <a-card hoverable style="width: 300px">
      <img
        slot="cover"
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
      <template slot="actions" class="ant-card-actions">
        <a-icon key="setting" type="setting" />
        <a-icon key="edit" type="edit" />
        <a-icon key="ellipsis" type="ellipsis" />
      </template>
      <a-card-meta :title="userName" description="Hi, good to see u!">
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/users'

export default {
  name: 'page-index',
  data () {
    return {
      userName: '',
    }
  },
  methods: {
    async getUserInfo () {
      await getUserInfo().then((res) => {
        this.userName = res.name
      })
    },
  },
  async created () {
    await this.getUserInfo()
  },
}
</script>
