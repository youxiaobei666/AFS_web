<template>
  <div class="login-popup-container">
    <!-- logo 部分 -->
    <div class="logo-text">
      <div class="logo">
        <img class="img" src="@/assets/logo.png" alt="" />
      </div>
      <div class="text">欢迎登录</div>
    </div>
    <!-- 表单部分 -->
    <div class="form">
      <!-- 输入框 -->
      <div class="input-form">
        <img class="avatar" src="@/assets/icons/avatar.png" alt="" />
        <img class="lock" src="@/assets/icons/lock.png" alt="" />
        <input class="in-username" v-model="userInfo.username" type="text" />
        <input
          class="in-password"
          v-model="userInfo.password"
          type="password"
        />
      </div>
    </div>
    <!-- 记住密码，调整登录 -->
    <div class="rem-register">
      <input class="remember" type="checkbox" />
      <div class="text-re">记住密码</div>
      <!-- 跳转注册链接 -->
      <div @click="toRegister" class="to-register">立即注册</div>
    </div>
    <!-- 立即登录按钮 -->
    <div class="btns">
      <div @click="HandleLogin" class="login-btn">立即登录</div>
      <div @click="loginBackend" class="login-btn">登录后台</div>
    </div>
    <!-- 隐私策略 -->
    <div class="private-issue">
      个人隐私策略所见？
      <br />
      <div class="text-pri">平台服务规则...</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '@/store'
import router from '@/router'
// 用户信息
const userInfo = ref({
  username: '宠友友',
  password: '123456',
})
// 登录事件
const HandleLogin = () => {
  console.log(userInfo)
  store.dispatch('login', userInfo.value)
}
const loginBackend = () => {
  router.push('/login')
}
const toRegister = () => {
  router.push('/register')
}
</script>

<style lang="scss" scoped>
// 弹出层样式
.login-popup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 480px;
  height: 480px;
  mix-blend-mode: multiply;
  opacity: 0.85;
  border-radius: 45px;
  background-color: #604130;
  //   logo 和文字部分
  .logo-text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 94px;

    .logo {
      width: 80px;
      height: 80px;

      .img {
        width: 100%;
        height: 100%;
      }
    }

    .text {
      /** 文本1 */
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 20px;
      line-height: 33.03px;
      color: rgba(255, 255, 255, 1);
      width: 250px;
      height: 47px;
    }
  }

  //   中间表单部分
  .form {
    width: 80%;
    //height: 216px;
    font-size: 15px;

    // 两个输入框
    .input-form {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 140px;

      //   两个图标
      .avatar {
        position: absolute;
        top: 24px;
        left: 15px;
        width: 13px;
        height: 13px;
      }

      .lock {
        position: absolute;
        top: 105px;
        left: 15px;
        width: 13px;
        height: 13px;
      }

      .in-username {
        width: 100%;
        height: 56px;
        background-color: #1e0323;
        border-radius: 40px;
        border: none;
        color: #fff;
        font-size: 20px;
        text-indent: 2em;
      }

      .in-password {
        width: 100%;
        height: 56px;
        border-radius: 40px;
        background-color: #1e0323;
        border: none;
        color: #fff;
        font-size: 20px;
        text-indent: 2em;
      }
    }
  }

  //   记住密码和跳转注册部分
  .rem-register {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 121px;
    height: 17px;
    color: #fff;

    .remember {
      width: 17px;
      height: 17px;
    }

    .text-re {
      width: 50px;
      height: 15px;
      font-size: 12px;
    }

    .to-register {
      width: 50px;
      height: 15px;
      font-size: 12px;
      color: rgba(42, 130, 228, 1);
      text-decoration: underline;
      cursor: pointer;
    }
  }

  // 登录按钮
  .btns {
    justify-content: center;
    display: flex;
    align-items: center;
    width: 80%;
    height: 48px;
    margin: 0 auto;
    gap: 20px;

    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40%;
      height: 80%;
      border-radius: 9999px;
      background: url(https://img.js.design/assets/img/64804da398bd569d2aac9331.png);
      background-size: cover;
      text-align: center;
      font-size: 20px;
      color: linear-gradient(
        180deg,
        rgba(64, 64, 64, 1) 0%,
        rgba(64, 64, 64, 0) 100%
      );
      cursor: pointer;
    }
  }

  //   隐私所见
  .private-issue {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 39px;
    color: #fff;

    .text-pri {
      color: rgba(42, 130, 228, 1);
      text-decoration: underline;
    }
  }
}
</style>
