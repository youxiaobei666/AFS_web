<template>
  <el-card v-for="(message, index) in messageList" :key="index" class="box-card" :class="messageClass(message.type)" @click="showMessage(message.title, message.content)">
    <div class="message-item">
      <img :src="message.avatar" class="avatar" />
      <div class="message-info">
       <div class='title'>
         <h3 class='title1'>{{ message.title }}</h3>
         <span class='time'>时间： {{message.time}}</span>
       </div>
        <p class='content'>{{ message.content }}</p>
      </div>
      <el-button type="danger" class='deleteBtn' @click.stop="deleteMessage(message.id, index)">删除</el-button>
    </div>
  </el-card>

  <el-dialog
    v-model="dialogVisible"
    :title='dialogTitle'
    width="30%"
    >
    <div>
      {{dialogContent}}
    </div>
    <template #footer>
      <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
           <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { getMessageList, getUserInfo,deleteMessageList } from '@/api/sys'
import { ID } from '@/constant'
import { getItem } from '@/utils/storage'

const messageList = ref([])
const dialogVisible = ref(false)
const dialogTitle = ref('')
const dialogContent = ref('')
const avatarList = ref([])

onMounted(async () => {
  const res = await getMessageList({ userId: getItem(ID) })
  messageList.value = res.messageList
})

const deleteMessage = async (id, index) => {
  console.log(id)
  try {
    await deleteMessageList({ id: id });
  } catch (error) {
    console.error(error);
  }
}
const showMessage = (title, content) => {
  dialogTitle.value = title
  dialogContent.value = content
  dialogVisible.value = true
}

const messageClass = computed(() => {
  return (type) => {
    switch(type) {
      case 1:
        return 'green-background'
      case 2:
        return 'yellow-background'
      default:
        return ''
    }
  }
});
</script>

<style lang='scss' scoped>
.message-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .message-info {
    
    display: flex;
    flex-direction: column;
    flex-grow: 1;
   .title{
     display: flex;
     width: 100%;
     justify-content: space-between;
     gap: 20px;
     .title1 {

     }
     .time {

     }
     .content {
       margin-top: 20px;
     }
   }


  }

  .deleteBtn {
    position: absolute;
    right: 0px;
    bottom: -20px;
  }
}

.box-card {
  margin: 10px;

  &.green-background {
    background-color: #b8e7a7;
  }

  &.yellow-background {
    background-color: #f8f8a3;
  }
}

.message-info:hover {
  cursor: pointer;
}
</style>

