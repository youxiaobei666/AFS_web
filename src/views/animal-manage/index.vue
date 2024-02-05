<template>
  <el-table :data="newUserData" stripe :scrollbar-always-on="true">
    <el-table-column :label="$t('msg.menu_id')">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon>
            <key></key>
          </el-icon>
          <span style="margin-left: 10px">{{ scope.row.animal_id }}</span>
        </div>
      </template>
    </el-table-column>
    <!-- 姓名 -->
    <el-table-column :label="$t('msg.animal_name')">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>{{ $t('msg.animal_name') }}: {{ scope.row.animal_name }}</div>
            <div>
              {{ $t('msg.animal_address') }}: {{ scope.row.animal_address }}
            </div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.animal_name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <!-- age -->
    <el-table-column :label="$t('msg.menu_age')">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-tag type="success">{{ scope.row.animal_age }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <!-- address -->
    <el-table-column :label="$t('msg.animal_address')">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-tag type="warning">{{ scope.row.animal_address }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <!-- 毛色 -->
    <el-table-column :label="$t('msg.animal_color')">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.animal_color }}</span>
        </div>
      </template>
    </el-table-column>
    <!-- 状态 -->
    <el-table-column :label="$t('msg.animal_status')">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>
            <el-tag :type="scope.row.status === 0 ? 'danger' : 'success'">
              {{ commonMap[scope.row.status].label || '' }}
            </el-tag>
          </span>
        </div>
      </template>
    </el-table-column>
    <!-- 操作 -->
    <el-table-column :label="$t('msg.menu_setup')">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >{{ $t('msg.edit') }}
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >{{ $t('msg.delete') }}
        </el-button>
      </template>
    </el-table-column>
    <!-- img -->
    <el-table-column :label="$t('msg.animal_img')">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-avatar shape="square" :src="scope.row.animal_img"></el-avatar>
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
  <!--  分页  -->
  <div
    style="
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-top: 10px;
    "
  >
    <el-pagination
      v-model:current-page="pageConfig.page"
      v-model:page-size="pageConfig.size"
      :page-sizes="[10, 20, 30, 50]"
      layout="total,sizes , prev, pager, next, jumper"
      :total="animalTotal"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
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
  <el-dialog v-model="editVisible" :title="$t('msg.dialog_edit')" width="30%">
    <!-- 表单 -->
    <el-form :form="editForm" label-width="120px">
      <el-form-item :label="$t('msg.animal_name')">
        <el-input v-model="editForm.animal_name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('msg.menu_age')">
        <el-input v-model="editForm.animal_age"></el-input>
      </el-form-item>
      <!-- 毛色-->
      <el-form-item :label="$t('msg.animal_color')">
        <el-input v-model="editForm.animal_color"></el-input>
      </el-form-item>
      <!--   状态   -->
      <el-form-item :label="$t('msg.animal_status')">
        <el-checkbox-group
          v-model="statusCheckboxes"
          @change="animalCheckboxes"
        >
          <el-checkbox
            v-for="item in commonMap"
            :key="item.id"
            :label="item.value"
          >
            {{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <!-- 头像上传 -->
      <el-form-item :label="$t('msg.animal_img')">
        <el-upload
          :action="config.baseUrl + 'upload'"
          :file-list="fileList"
          name="file"
          :on-success="handleSuccess"
          :on-remove="handleRemove"
          list-type="picture-card"
          :auto-upload="true"
          :limit="1"
          :headers="getAuthHeaders()"
        >
          <el-icon class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <!-- 地区选择 -->
      <el-form-item :label="$t('msg.animal_address')">
        <el-cascader
          v-model="editForm.animal_address"
          :options="regionOptions"
          @change="handleChangeRegion"
          :placeholder="editForm.animal_address"
        ></el-cascader>
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
import { reactive, ref, watch } from 'vue'
import { getItem } from '@/utils/storage'
import { commonMap, TOKEN } from '@/constant/index'
import formatRegion from '@/utils/formatRegion'
import regionDatas from '@/constant/regionData'
import { deleteAnimal, editAnimal, queryAnimalList } from '@/api/sys'
import { ElMessage } from 'element-plus'
import config from '@/config'

const BigImgUrl = ref('')
const imgVisible = ref(false)
const editVisible = ref(false)
const editForm = reactive({
  animal_name: '',
  animal_id: '',
  animal_age: '',
  animal_img: '',
  animal_address: '',
  animal_color: '',
  status: '',
})
const toBeEditId = ref('')
const fileList = ref([])
const regionOptions = reactive(formatRegion(regionDatas)) // 获取地区的配置
const statusCheckboxes = ref()
const animalTotal = ref()
const animalAllInfo = ref([]) // 用来保存第一次进入的数据的
const newUserData = ref() // 真正被用的 dataSource
queryAnimalList().then((res) => {
  const { page, size } = pageConfig
  animalTotal.value = res.total
  newUserData.value = res.animalInfo.slice((page - 1) * size, page * size) // 第一遍设置表格数据
  animalAllInfo.value = res.animalInfo
})

// animalAllInfo.value = res.animalInfo

// 全局分页配置，当配置被修改，使用 watch 监听变化从而修改表格数据源
const pageConfig = reactive({
  page: 1, // 默认第一页
  size: 10, // 默认十条数据
})
// 分页事件
const handleCurrentChange = (val) => {
  pageConfig.page = val
}
const handleSizeChange = (val) => {
  pageConfig.size = val
}

// 当分页配置改变时，修改数据源
watch(
  pageConfig,
  (newVal, oldVal) => {
    const { page, size } = newVal
    newUserData.value = animalAllInfo.value.slice(
      (page - 1) * size,
      page * size
    )
  },
  { immediate: true }
)

// 图片显示事件
const handleShowBigImg = (index, row) => {
  imgVisible.value = true
  // 赋值图片 url
  BigImgUrl.value = row.animal_img
}
// 编辑 | 删除事件
const handleEdit = (index, row) => {
  editVisible.value = true
  toBeEditId.value = row.animal_id
}
const handleDelete = (index, row) => {
  deleteAnimal(row.animal_id).then((res) => {})
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
  editForm.animal_img = response.url
}

const handleRemove = (file) => {
  fileList.value = fileList.value.filter((f) => f.url !== file.url)
  editForm.animal_img = ''
}

const handleChangeRegion = (value) => {
  editForm.animal_address = value[1]
}

const animalCheckboxes = (value) => {
  editForm.status = value.join(',')
}

// 确认修改用户信息事件
const handleConfirmEdit = () => {
  editForm.animal_id = toBeEditId.value
  console.log(editForm)
  editAnimal(editForm).then((res) => {})
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
</style>
