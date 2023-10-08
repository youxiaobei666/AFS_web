<template>
  <el-table :data="friends" style="width: 100%">
    <el-table-column type="expand"></el-table-column>
    <el-table-column prop="avatar" label="头像">
      <template #default='scope'>
        <el-avatar :src="scope.row.avatar"></el-avatar>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="用户名"></el-table-column>
    <el-table-column label="操作">
      <template #default='scope'>
        <el-button type="danger" @click="deleteFriend(scope.row)">删除此好友</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>

</script>
