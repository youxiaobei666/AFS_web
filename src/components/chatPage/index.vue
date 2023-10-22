<template>
  <!-- 创建一个相对专用于布局的容器，内含主要区域 -->
  <el-container>
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
              <div v-if="msg.class === 'send'" class="right">
                {{ msg.message }}
              </div>
              <!-- 收到的消息在左侧显示 -->
              <div v-if="msg.class === 'received'" class="left">
                {{ msg.message }}
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
import { ref, onMounted, onUnmounted } from 'vue';
import { getChatSessionId } from '@/api/sys'

let input = ref(''); // 输入的消息
let messages = ref([]); // 消息列表
let socket = null; // WebSocket 实例

// 组件挂载时创建 WebSocket，并监听接收消息事件
onMounted(() => {
  // 获取 sessionId
  getChatSessionId().then((res) =>{
    console.log(res)
  })
  let sessionId = '123'; // 使用特定的 sessionId
  socket = new WebSocket(`ws://localhost:8091/ws?sessionId=${sessionId}`);

  socket.addEventListener('message', async event => {
    let data = event.data;
    // 如果数据是 Blob 对象，先转换成文本
    if (data instanceof Blob) {
      data = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsText(data); // 以文字形式读取
        reader.onloadend = () => resolve(reader.result); // 读取结束时的回调
      });
    }
    // 推送接收到的消息到消息列表
    messages.value.push({
      message: data,
      class: 'received'
    });
  });
});


// 发送消息函数，将用户输入的消息送到服务器
const sendMessage = () => {
  if (input.value.trim() !== '') {
    messages.value.push({
      message: input.value,
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

.chat-container {
  margin: 0 auto;
  width: 80%;
  height: 90vh;
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
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    .text {
      margin-left: 10px;
    }
  }

  .message-card {
    margin-bottom: 15px;

    .right {
      text-align: right;
      background-color: #f36f2b;
      color: white;
      border-radius: 10px;
      padding: 10px;
      max-width: 60%;
      margin-left: auto;
    }

    .left {
      text-align: left;
      background-color: #f2f2f2;
      border-radius: 10px;
      padding: 10px;
      max-width: 60%;
    }
  }
}
</style>
