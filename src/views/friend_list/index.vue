<template>
  <div>
    <el-button v-if='showType !== "list"' @click='evt => showType="list"' class='back-btn'><el-icon><ArrowLeftBold /></el-icon> 返回好友列表</el-button>
    <!--状态一：好友列表-->
    <GoodFriendList v-if='showType === "list"' :friends='store.getters.getFriendsList || []' @contact-friend='goToChat'
                    @delete-Friend='deleteFriend'></GoodFriendList>
    <!--状态二：聊天详情-->
    <chatPage :friendId='toChatFriendId' v-else></chatPage>

  </div>
</template>

<script setup>
import GoodFriendList from '@/components/GoodFriendList'
import chatPage from '@/components/chatPage'
import store from '@/store'
import { ref } from 'vue'
import { editUserInfo } from '@/api/sys'

const showType = ref('list')
const toChatFriendId = ref('')
const goToChat = (id) =>{ // 传 id 获取好友信息
  toChatFriendId.value = id
  showType.value  = 'chat'
}
const deleteFriend = (fid) => {
  editUserInfo({
    id: store.getters.userInfo.id,
    friends: store.getters.userInfo.friends.split(',').filter(i => Number.parseInt(i) !== Number.parseInt(fid)).join(',')
  })
}
</script>

<style lang='scss' scoped>

</style>