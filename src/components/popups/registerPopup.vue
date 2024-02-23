<template>
  <!-- 盒子 1 -->
  <div class="login-popup-container-1" :style="box_style1">
    <!-- logo 部分 -->
    <div class="logo-text">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="text">正在加入<br />宠友社</div>
    </div>
    <!-- 表单部分 -->
    <div class="form">
      <!-- 输入框 -->
      <div class="input-form">
        <img class="avatar" src="@/assets/icons/avatar.png" alt="" />
        <img class="lock" src="@/assets/icons/lock.png" alt="" />
        <input
          class="in in-phone"
          v-model="userInfo.user_phone"
          type="text"
          placeholder="请输入手机号"
        />
        <input
          class="in in-password"
          v-model="userInfo.password"
          type="text"
          placeholder="请输入密码"
        />
      </div>
      <!-- 已有账户 -->
      <div class="hadAccount">
        <div class="text-re">已有用户？</div>
        <!-- 跳转登录 -->
        <div @click="toLogin" class="to-login">立即登录</div>
      </div>
      <!-- 下一步 -->
      <div @click="HandleNext" class="next">下一步</div>
    </div>
  </div>
  <!-- 盒子 2 -->
  <div class="login-popup-container-2" :style="box_style2">
    <!-- 左上角箭头 -->
    <div class="left-top-arrow">
      <img src="@/assets/icons/left-line-arrow.png" alt="" />
    </div>
    <!-- 标题 -->
    <div class="title">完善注册资料</div>
    <!-- 表单部分 -->
    <div class="form">
      <!-- 头像 -->
      <div class="up-avatar">
        <img src="@/assets/icons/upload-avatar.png" alt="" />
      </div>
      <!-- 摄像头小图标 -->
      <div class="up-camara">
        <img src="@/assets/icons/upload-camara.png" alt="" />
      </div>
      <!-- 5 个人表单 -->
      <div class="input-area">
        <!-- 分为三行 -->
        <!-- 1 行 -->
        <div class="line line1">
          <img class="icons icon-avatar" src="@/assets/icons/avatar.png" />
          <img class="icons icon-idCard" src="@/assets/icons/icon-idCard.png" />
          <input
            class="in in-username"
            v-model="userInfo_Register.username"
            placeholder="用户名"
          />
          <input
            class="in in-realname"
            v-model="userInfo_Register.user_realname"
            placeholder="你的真实姓名"
          />
        </div>
        <!-- 2 行 -->
        <div class="line line2">
          <div class="in in-gender">女神</div>
          <div class="in in-gender">男生</div>
        </div>
        <!-- 3 行 -->
        <div class="line line3">
          <img class="icons icon-gps" src="@/assets/icons/icon-gps.png" />
          <input
            class="in in-address"
            v-model="userInfo_Register.user_address"
            placeholder="请输入地址"
          />
        </div>
      </div>
      <!-- 注册按钮 -->
      <div @click="HandleRegister" class="to-register">立即注册</div>
    </div>
  </div>
</template>

<script setup>
import store from '@/store'
import { ref, reactive } from 'vue'

// 用户数据
const userInfo_Register = reactive({
  username: '宠友友',
  password: '123456',
  user_avatar: 'http://www.youxiaobei.top:1227/images/1 .png',
  user_realname: '张三',
  user_gender: '匿名友友',
  user_hobby: '',
  user_phone: '17718473047',
  user_address: '',
})

const box_style1 = ref('')
const box_style2 = ref('')
// 用户信息
const userInfo = ref({
  username: 'admin',
  password: '123456',
  user_phone: '17718473047',
})
// 下一步事件
const HandleNext = () => {
  box_style1.value = 'left: -400px; opacity: 0; transition: ease 1s;'
  box_style2.value = 'left: 700px; opacity: 0.85; transition: ease 1s;'
}
// 触发注册事件
const HandleRegister = () => {
  store.dispatch('register', userInfo_Register)
}
</script>

<style lang="scss" scoped>
// 弹出层样式
.login-popup-container-1 {
  position: absolute;
  top: 200px;
  left: 700px;
  width: 480px;
  height: 480px;
  opacity: 0.85;
  border-radius: 45px;
  background: #a195ac;
  box-shadow: 1px 7px 13px rgba(0, 0, 0, 0.46);
  transition: ease 1s;
  //   logo 和文字部分
  .logo-text {
    display: flex;
    align-items: center;
    position: absolute;
    top: 39px;
    left: 43px;
    width: 297px;
    height: 94px;

    .text {
      /** 文本1 */
      opacity: 0.95;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 20px;
      line-height: 33.03px;
      color: rgba(255, 255, 255, 1);
      width: 200px;
      height: 47px;
    }
  }
  //   中间表单部分
  .form {
    position: absolute;
    top: 168px;
    left: 59px;
    width: 364px;
    height: 216px;
    font-size: 15px;

    // 两个输入框
    .input-form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 364px;
      height: 140px;
      //   两个图标
      .avatar {
        position: absolute;
        top: 20px;
        left: 15px;
        width: 13px;
        height: 13px;
      }

      .lock {
        position: absolute;
        top: 100px;
        left: 15px;
        width: 13px;
        height: 13px;
      }

      .in {
        width: 100%;
        height: 56px;
        background-color: transparent;
        border-radius: 40px;
        opacity: 0.8;
        border: solid 2px #fff;
        color: #fff;
        font-size: 20px;
        text-indent: 2em;
        // background: rgb(255, 251, 251);
      }
      .in:focus {
        outline: none;
      }
    }
  }
  //   记住密码和跳转注册部分
  .hadAccount {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 121px;
    height: 17px;
    color: #fff;

    .text-re {
      width: 70px;
      height: 15px;
      font-size: 12px;
    }
    .to-login {
      width: 50px;
      height: 15px;
      font-size: 12px;
      color: rgb(255, 255, 255);
      text-decoration: underline;
      cursor: pointer;
    }
  }
  //   立即登录按钮
  .next {
    position: absolute;
    top: 176px;
    left: 126px;
    width: 116px;
    height: 38px;
    border-radius: 50px;
    background: url('@/assets/linnerBg1.png');
    background-size: cover;
    text-align: center;
    padding-top: 10px;
    font-size: 20px;
    color: #fcfdff;
    cursor: pointer;
  }
}
.login-popup-container-2 {
  position: absolute;
  top: 200px;
  left: 2000px;
  width: 555px;
  height: 648px;
  opacity: 0;
  border-radius: 45px;
  background: #a195ac;
  box-shadow: 1px 7px 13px rgba(0, 0, 0, 0.46);
  transition: ease 1s;
  // 箭头
  .left-top-arrow {
    position: absolute;
    top: 38px;
    left: 47px;
    width: 31px;
    height: 36px;
  }

  //   标题
  .title {
    position: relative;
    top: 38px;
    left: 200px;
    width: 144px;
    height: 35px;
    opacity: 1;
    /** 文本1 */
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 34.75px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    vertical-align: top;
  }
  //   中间表单部分
  .form {
    position: relative;
    top: 68px;
    left: 68px;
    width: 416px;
    height: 416px;
    font-size: 15px;

    // 头像上传
    .up-avatar {
      position: absolute;
      top: 0;
      left: 155px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
    }
    .up-camara {
      position: absolute;
      top: 60px;
      left: 225px;
      width: 40px;
      height: 40px;
    }
    // 五个输入框
    .input-area {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 146px;
      width: 421px;
      height: 266px;
      .in {
        background-color: transparent;
        border-radius: 40px;
        opacity: 0.8;
        border: solid 2px #fff;
        color: #fff;
        font-size: 20px;
        text-indent: 2em;
      }
      .in:focus {
        outline: none;
      }
      .in-username {
        width: 167px;
        height: 65px;
        opacity: 0.8;
        border-radius: 40px;
      }
      .in-realname {
        width: 229px;
        height: 65px;
        text-indent: 3em !important;
      }
      .in-gender {
        width: 200px;
        height: 65px;
      }
      .in-address {
        width: 100%;
      }
      .line {
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: space-between;
        .icon-avatar {
          position: absolute;
          top: 25px;
          left: 20px;
          width: 15px;
          height: 15px;
        }
        .icon-idCard {
          position: absolute;
          top: 25px;
          left: 210px;
          width: 25px;
          height: 15px;
        }
        .icon-gps {
          position: absolute;
          top: 225px;
          left: 20px;
          width: 15px;
          height: 18px;
        }
      }
    }
  }

  // 立即注册按钮
  .to-register {
    position: absolute;
    top: 446px;
    left: 126px;
    width: 116px;
    height: 38px;
    border-radius: 50px;
    background: url('@/assets/linnerBg1.png');
    background-size: cover;
    text-align: center;
    padding-top: 10px;
    font-size: 20px;
    color: #fcfdff;
    cursor: pointer;
  }
}
</style>
