<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
        <el-button style="float: right;" @click="openEditDialog">编辑</el-button>
      </div>
      <el-form :model="form" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"  disabled></el-input>
        </el-form-item>
        <el-form-item label="电子邮件">
          <el-input v-model="form.email" disabled></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" disabled></el-input>
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="form.city" disabled></el-input>
        </el-form-item>
      </el-form>
      <el-avatar :src="form.img" :size="120"></el-avatar>
      <!-- 用户信息编辑对话框 -->
      <el-dialog v-model="editDialogVisible" title="编辑个人信息" width="50%">
        <el-form :model="editForm" label-width="120px">
          <el-form-item label="用户名">
            <el-input v-model="editForm.username"></el-input>
          </el-form-item>
          <el-form-item label="电子邮件">
            <el-input v-model="editForm.email"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="editForm.age"></el-input>
          </el-form-item>
          <el-form-item label="城市">
            <el-input v-model="editForm.city"></el-input>
          </el-form-item>
          <el-form-item>
            <el-upload action="/upload" list-type="picture-card" :on-success="handleAvatarSuccess" :before-upload="handleBeforeUpload" :show-file-list="false">
              <img v-if="editForm.img" :src="editForm.img" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmEdit">提交</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { getUserInfo, editUserInfo } from '@/api/sys'
import { getItem } from '@/utils/storage'
import { ID } from '@/constant'

let form = reactive({})
  let editForm = reactive({})
  let editDialogVisible = ref(false)

onMounted(async () => {
  const res = await getUserInfo({ id: getItem(ID) })
  for(let key in res.userInfo){
    form[key] = res.userInfo[key]
  }
  Object.assign(editForm, res.userInfo);
})

const openEditDialog = () => {
  editDialogVisible.value = true
}

const handleConfirmEdit = async () => {
  const res = await editUserInfo(editForm)
  console.log(editForm)
  if (res.success) {
    form = { ...editForm }
    editDialogVisible.value = false
  } else {
  }
}

const handleAvatarSuccess = res => {
  editForm.img = res.url
}

const handleBeforeUpload = () => {
  // handle file before upload
}

// 文件上传
const getAuthHeaders = () => {
  const token = getItem(TOKEN) || ''
  return {
    Authorization: `Bearer ${token}`,
  }
}
</script>

<style lang='scss' scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-card {
  width: 100%;
}

.dialog-footer {
  text-align: right;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.clearfix {
  margin-bottom: 20px;
}
</style>
