<template>
  <el-table :data="friends" style="width: 100%">
    <el-table-column prop="friend_img" label="头像">
      <template #default='scope'>
        <el-avatar :src="scope.row.friend_img"></el-avatar>
      </template>
    </el-table-column>
    <el-table-column prop="username" label="用户名">
      <template #default='scope'>
        <el-tag type='success'>{{scope.row.username}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="friend_img" label="城市">
      <template #default='scope'>
        <el-tag >{{scope.row.friend_city}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="friend_email" label="好友邮箱">
      <template #default='scope'>
        <el-tag >{{scope.row.friend_email}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default='scope'>
        <el-button type="danger" @click="deleteFriend(scope.row.id)">删除此好友</el-button>
        <el-button type="success" @click="contactFriend(scope.row.id)">联系此好友</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
defineProps({
  friends: {
    type: Array,
    required: true
  }
})
// 声明组件可以触发的自定义事件
const emits = defineEmits(['contact-friend']);
const deleteFriend = (friendId) =>{
 emits('delete-Friend', friendId)
}
const contactFriend = (friendId) => {
  // 触发自定义事件，将好友ID传递给父组件
  emits('contact-friend', friendId );
}
</script>
