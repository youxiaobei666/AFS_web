<template>
  <!-- tableall -->
  <el-table
    :data="newUserData"
    stripe
    :scrollbar-always-on="true"
  >
    <el-table-column :label="$t('msg.menu_id')">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon>
            <key></key>
          </el-icon>
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </div>
      </template>
    </el-table-column>
    <!-- 姓名 -->
    <el-table-column :label="$t('msg.menu_name')">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>{{ $t('msg.menu_name') }}: {{ scope.row.username }}</div>
            <div>{{ $t('msg.menu_city') }}: {{ scope.row.city }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.username }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <!-- 权限 -->
    <el-table-column :label="$t('msg.user_auth')">
      <template #default='scope'>
        <template v-if='scope.row.permission'>
          <el-tag class='tags' v-for='(item, index) in scope.row.permission.split(",")'>{{authMap[item].label}}</el-tag>
        </template>
        <template v-else>
          无权限
        </template>
      </template>
    </el-table-column>
    <!-- 操作 -->
    <el-table-column :label="$t('msg.menu_auth')">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">{{
            $t('msg.edit')
          }}</el-button>
<!--        <el-button-->
<!--          size="small"-->
<!--          type="danger"-->
<!--          @click="handleDelete(scope.$index, scope.row)"-->
<!--        >{{ $t('msg.delete') }}</el-button-->
<!--        >-->
      </template>
    </el-table-column>
    <!-- img -->
    <el-table-column :label="$t('msg.menu_img')">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-avatar shape="square" :src="scope.row.img"></el-avatar>
          <div @click="imgVisible = true">
            <el-button
              text
              @click.stop="handleShowBigImg(scope.$index, scope.row)"
            >
              {{ $t('msg.popover_img') }}
            </el-button>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <div style='display:flex; width: 100%; justify-content: flex-end; margin-top: 10px'>
    <el-pagination
      v-model:current-page='pageConfig.page'
      v-model:page-size='pageConfig.size'
      :page-sizes='[10, 20, 30, 50]'
      layout='total,sizes , prev, pager, next, jumper'
      :total='userInfoTotal'
      @size-change='handleSizeChange'
      @current-change='handleCurrentChange'
    />
  </div>
  <!-- 图片框 -->
  <el-dialog
    v-model="imgVisible"
    :title="$t('msg.dialog_showBigImg')"
    width="40%"
    :show-close="false"
  >
    <el-avatar :src="BigImgUrl" :size="300" shape="square"></el-avatar>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="imgVisible = false">{{
            $t('msg.popover_back')
          }}</el-button>
        <el-button type="primary" @click="imgVisible = false">
          {{ $t('msg.popover_confirm') }}
        </el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 编辑框 -->
  <el-dialog v-model="editVisible" :title="$t('msg.menu_auth')" width="30%">
    <!-- 表单 -->
    <el-form :form="editForm" label-width="80px">
<!--      <el-form-item :label="$t('msg.menu_name')">-->
<!--        <el-input v-model="editForm.name"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item :label="$t('msg.menu_age')">-->
<!--        <el-input v-model="editForm.age"></el-input>-->
<!--      </el-form-item>-->
<!--      &lt;!&ndash; 头像上传 &ndash;&gt;-->
<!--      <el-form-item :label="$t('msg.menu_img')">-->
<!--        <el-upload-->
<!--          action="/upload"-->
<!--          :file-list="fileList"-->
<!--          name="file"-->
<!--          :on-success="handleSuccess"-->
<!--          :on-remove="handleRemove"-->
<!--          list-type="picture-card"-->
<!--          :auto-upload="true"-->
<!--          :limit="1"-->
<!--          :headers="getAuthHeaders()"-->
<!--        >-->
<!--          <el-icon  class="avatar-uploader-icon">-->
<!--            <Plus />-->
<!--          </el-icon>-->
<!--        </el-upload>-->
<!--      </el-form-item>-->
<!--      &lt;!&ndash; 地区选择 &ndash;&gt;-->
<!--      <el-form-item :label="$t('msg.menu_city')">-->
<!--        <el-cascader-->
<!--          v-model="editForm.city"-->
<!--          :options="regionOptions"-->
<!--          @change="handleChangeRegion"-->
<!--          :placeholder="editForm.city"-->
<!--        ></el-cascader>-->
<!--      </el-form-item>-->
<!--      <el-form-item :label="$t('msg.menu_email')">-->
<!--        <el-input v-model="editForm.email"></el-input>-->
<!--      </el-form-item>-->

<!--      <el-form-item :label="$t('msg.menu_hobby')">-->
<!--        <el-checkbox-group-->
<!--          v-model="hobbyCheckboxes"-->
<!--          @change="handleHobbyChange"-->
<!--        >-->
<!--          <el-checkbox-->
<!--            v-for="item in hobbyMap"-->
<!--            :key="item.id"-->
<!--            :label="item.value"-->
<!--          >-->
<!--            {{ item.label }}-->
<!--          </el-checkbox>-->
<!--        </el-checkbox-group>-->
<!--      </el-form-item>-->
<!--      权限修改   -->
      <el-form-item :label="$t('msg.menu_auth')">
        <el-checkbox-group
          v-model="authCheckboxes"
          @change="handleAuthChange"
        >
          <el-checkbox
            v-for="item in authChangeMap"
            :key="item.id"
            :label="item.value"
          >
            {{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="editVisible = false">{{
            $t('msg.popover_back')
          }}</el-button>
        <el-button type="primary" @click="handleConfirmEdit">
          {{ $t('msg.popover_confirm') }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import store from '@/store'
import { reactive, ref, watch } from 'vue'
import { getItem } from '@/utils/storage'
import { authChangeMap, authMap, hobbyMap, TOKEN } from '@/constant'
import formatRegion from '@/utils/formatRegion'
import regionDatas from '@/constant/regionData'
import { deleteUser, editUserInfo, getAllUserInfo } from '@/api/sys'

// 表格数据源
const userAllInfo = ref([])
const userInfoTotal = ref(null)
const BigImgUrl = ref('')
const imgVisible = ref(false)
const editVisible = ref(false)
const editForm = reactive({
  id: '',
  name: '',
  age: '',
  img: '',
  city: '',
  email: '',
  hobby: '',
  permission: ''
})
const toBeEditId = ref('')
const fileList = ref([])
const regionOptions = reactive(formatRegion(regionDatas)) // 获取地区的配置
const hobbyCheckboxes = ref()
const authCheckboxes = ref()

// 全局分页配置，当配置被修改，使用 watch 监听变化从而修改表格数据源
const pageConfig = reactive({
  page: 1, // 默认第一页
  size: 10 // 默认十条数据
})
// 分页事件
const handleCurrentChange = (val) => {
  pageConfig.page = val
}
const handleSizeChange = (val) => {
  pageConfig.size = val
}
const newUserData = ref()
getAllUserInfo().then(res => {
  console.log(res)
  const {page, size } = pageConfig
  userInfoTotal.value = res.total
  newUserData.value  =res.userInfo.slice((page-1)*size, page*size)
  userAllInfo.value = res.userInfo
})


// 当分页配置改变时，修改数据源
watch(pageConfig, (newVal, oldVal) => {
  const {page, size} = newVal
  newUserData.value = userAllInfo.value.slice((page-1)*size,page*size)
    ,{immediate: true}})
// 图片显示事件
const handleShowBigImg = (index, row) => {
  imgVisible.value = true
  // 赋值图片 url
  BigImgUrl.value = row.img
}
// 编辑 | 删除事件
const handleEdit = (index, row) => {
  editVisible.value = true
  toBeEditId.value = row.id
}
const handleDelete = (index, row) => {
  deleteUser(row.id).then(res => {

  })
  editVisible.value = false
}

// 文件上传
const getAuthHeaders = () => {
  const token = getItem(TOKEN) || ''
  return {
    Authorization: `Bearer ${token}`,
  }
}

const handleSuccess = (response, file) => {
  fileList.value.push(file)
  file.url = response.url
  editForm.img = response.url
}

const handleRemove = (file) => {
  fileList.value = fileList.value.filter((f) => f.url !== file.url)
  editForm.img = ''
}

const handleChangeRegion = (value) => {
  editForm.city = value[1]
}

const handleHobbyChange = (value) => {
  editForm.hobby = value.join(',')
}
const handleAuthChange = (value) => {
  editForm.hobby = value.join(',')
}

// 确认修改用户信息事件
const handleConfirmEdit = () => {
  editForm.id = toBeEditId.value
  console.log(editForm)
  editUserInfo(editForm).then((res) => {

  })
  editVisible.value = false
}
</script>

<style scoped lang="scss">
.dialog-footer button:first-child {
  margin-right: 10px;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.tags {
  margin: 0 5px;
}
</style>
