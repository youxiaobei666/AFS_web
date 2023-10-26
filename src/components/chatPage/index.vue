<template>
  <!-- 创建一个相对专用于布局的容器，内含主要区域 -->
  <el-container class='container'>
    <div class='header'>
      <div class=''></div>
      <div class='title'>
        你正在和 <span class='friend-name'>{{  friendInfo.username  }}</span> 聊天
      </div>
      <div class=''></div>
    </div>
    <el-main>
      <!-- 聊天区域 -->
      <div class="chat-container">
        <!-- 消息显示区 -->
        <div class="messages">
          <!-- 遍历消息，根据消息类型显示不同样式 -->
          <div v-for="(msg, index) in messages" :key="index" :class="msg.class">
            <!-- 卡片组件用于展示消息 -->
            <el-card class="message-card">
              <!-- 发送的消息在右侧显示 -->
              <div v-if="msg.class === 'send'" class='right message'>
                <img :src='getItem(AVATAR)' class='avatar right-avatar'>
                <div class='text'>{{ msg.item.message }}</div>
                <div class='time'>发送时间：{{msg.item.timestamp}}</div>
              </div>
              <!-- 收到的消息在左侧显示 -->
              <div v-if="msg.class === 'received'" class='left message'>
                <img :src='friendInfo.img' class='avatar left-avatar'>
                <div class='text'>{{ msg.item.message }}</div>
                <div class='time'>回复时间：{{msg.item.timestamp}}</div>
              </div>
            </el-card>
          </div>
        </div>
        <!-- 输入和发送消息区 -->
        <div class="input-area">
          <!-- 文本区域输入框，回车触发发送消息 -->
          <el-input type="textarea" v-model="input" @keyup.enter.prevent="sendMessage" placeholder="输入消息..."></el-input>
          <!-- 发送消息按钮 -->
          <el-button type="success" @click="sendMessage"><el-icon><Position /></el-icon> <span class='text'>发送</span></el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { getChatSessionId, getUserInfo } from '@/api/sys'
import { getItem } from '@/utils/storage'
import { AVATAR, ID } from '@/constant'


let input = ref(''); // 输入的消息
let messages = ref([]); // 消息列表
let socket = null; // WebSocket 实例

const props = defineProps({
  friendId: {
    type: Number,
    required: false,
    default: 1,
  }
})


const friendInfo = ref({})

// 组件挂载时创建 WebSocket，并监听接收消息事件
onMounted(() => {
  // // 获取 sessionId
  // getChatSessionId().then((res) =>{
  //   console.log(res)
  // })
  // 获取聊天对象信息
  getUserInfo({
    id: props.friendId
  }).then((res) => {
    friendInfo.value = res.userInfo
  })

  socket = new WebSocket(`ws://localhost:8091/ws?mineId=${getItem(ID)}&&targetId=${props.friendId}`);

  socket.addEventListener('message', async event => {
    let data = event.data;
    try {
      // 尝试解析接收到的消息
      data = JSON.parse(event.data);
    } catch(error) {
      console.error('Error parsing message', error);
      return;
    }
    // 推送接收到的消息到消息列表
    messages.value.push({
      item: data,
      class: 'received'
    });
  });
});


// 发送消息函数，将用户输入的消息送到服务器
const sendMessage = () => {
  if (input.value.trim() !== '') {
    messages.value.push({
      item: {
        message: input.value,
        timestamp: new Date().toISOString().slice(0,10)
      },
      class: 'send'
    });
  }
  // 发送到后端
  socket.send(input.value);
  input.value = '';
};

// 组件卸载时关闭 WebSocket
onUnmounted(() => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
  }
});

</script>
<style lang="scss" scoped>
body {
  color: #333;
}

.container {
  display: flex;
  flex-direction: column;


  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    height: 50px;
    background-color: #67c23a;
    border-radius: 9999px;
    color: #fff;
    .back-btn {

    }
    .title {
      .friend-name {
        font-size: 20px;
        margin: 0 10px;
        color: #f36f2a;
        font-weight: 500;
      }
    }

  }

  .chat-container {
    margin: 0 auto;
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #bebebe;
    border-radius: 10px;

    .messages {
      height: 80%;
      overflow-y: auto;
      padding: 15px;
    }

    .input-area {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 15px;

      .text {
        margin-left: 10px;
      }
    }

    // 聊天卡片样式
    .message-card {
      margin-bottom: 15px;
      box-shadow: none;
      border: none;

      .message {
        display: flex;
        align-items: center;

        .text {
          flex-grow: 1;
        }

        // 右侧消息样式
        &.right {
          flex-direction: row-reverse; // 反向flex，使头像位于右侧
          text-align: right;
          background-color: #f36f2b;
          color: white;
          border-radius: 10px;
          padding: 10px;
          max-width: 60%;
          margin-left: auto;

          .avatar { // 调整头像到右侧
            margin-left: 10px;
          }
        }

        // 左侧消息样式
        &.left {
          text-align: left;
          background-color: #f2f2f2;
          border-radius: 10px;
          padding: 10px;
          max-width: 60%;

          .avatar { // 调整头像到左侧
            margin-right: 10px;
          }
        }
      }
    }
  }

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}

</style>
