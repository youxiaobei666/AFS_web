<template>
  <div class='navbar' id='navbar'>
    <!-- logo -->
    <div class='logo' @click='logoClick'>
      <img class='img-logo' src='@/assets/logo.png' alt='logo丢失了' />
      <img class='font-logo' src='@/assets/AFC.png' alt='文字丢失' />
    </div>
    <!-- 导航 -->
    <div class='guide'>
      <div>我要领养</div>
      <div>发布领养</div>
      <div>宠友社区</div>
      <div>动物知识</div>
      <div>捐助</div>
      <div>联系我们</div>
    </div>
    <!-- 用户操作模块 -->
    <div
      @mouseenter='handleMouseenter'
      @mouseleave='handleMouseleave'
      class='user-module'
    >
      <div class='user_avatar'>
        <img :src="userInfo.data ? userInfo.data.user_avatar : ''" alt='' />
      </div>
      <div class='username'>
        {{ userInfo.data ? userInfo.data.username : '未登录' }}
      </div>
      <div class='control-bar'></div>
    </div>
    <!-- 登录弹出框 -->
    <div
      @mouseleave='handleMouseleave'
      :style='styleHidden'
      class='login-popup'
    >
      <loginPopup></loginPopup>
    </div>
  </div>
</template>

<script setup>
import loginPopup from '@/components/popups/loginPopup'
import { computed, ref } from 'vue'
import router from '@/router'
import store from '@/store'

const userInfo = computed(() => {
  return store.getters.userInfo
})

const logoClick = () => {
  router.push('/')
}

/**
 * 登录框动画
 */
let styleHidden = ref('')
let handleMouseleave = ''
// 鼠标移入
const handleMouseenter = (e) => {
  handleMouseleave = '' // 清楚移出事件
  styleHidden.value =
    'position: absolute; top: 110px; right: 200px; opacity: 1; transition: ease 1s; '
  setTimeout(() => {
    handleMouseleave = () => {
      styleHidden.value = ''
    }
  }, 300)
}

/**
 * 滚动后加背景
 */
window.addEventListener('scroll', function() {
  var element = document.getElementById('navbar')
  var scrollPosition = window.scrollY
  if (scrollPosition >= 250) {
    element.style.backgroundColor = 'rgba(40, 40, 40, 0.8)'
  } else {
    element.style.backgroundColor = 'transparent'
  }
})
</script>

<style lang='scss' scoped>
@import url("@/styles/fonts.scss");

.navbar {
  box-sizing: border-box;
  width: 100%;
  height: 168px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  font-family: "SourceHanSansCN-VF-2";
  z-index: 1001;
  transition: ease-in-out 0.5s;

  // logo
  .logo {
    display: flex;
    width: 240px;
    height: 76px;
    margin-left: 77px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }

    .img-logo {
      width: 81px;
      height: 76px;
    }

    .font-logo {
      width: 140px;
      height: 47px;
    }
  }

  // 导航
  .guide {
    display: flex;
    width: 988px;
    height: 34px;
    margin-left: 201px;
    margin-right: 88px;
    justify-content: space-around;
    line-height: 34px;
    /** 文本1 */
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);

    div:hover {
      color: rgba(255, 234, 176, 1);
      cursor: pointer;
    }
  }

  // 用户模块
  .user-module {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 270px;
    height: 55px;
    margin-right: 57px;
    border-radius: 80px;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 7px 16px rgba(0, 0, 0, 0.1),
    0px 30px 30px rgba(0, 0, 0, 0.09), 0px 67px 40px rgba(0, 0, 0, 0.05),
    0px 118px 47px rgba(0, 0, 0, 0.01), 0px 185px 52px rgba(0, 0, 0, 0);
    cursor: pointer;

    .user_avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    .username {
      width: 154px;
      height: 30px;
      margin-left: 11px;
      /** 文本1 */
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 26.75px;
      color: rgba(255, 255, 255, 1);
    }

    .control-bar {
      width: 0px;
      height: 0px;
      margin-top: 8px;
      margin-right: 20px;
      border-top: solid #cccccc 8px;
      border-left: solid transparent 11px;
      border-bottom: solid transparent 8px;
      border-right: solid transparent 11px;
    }
  }

  // 登录弹出框
  .login-popup {
    position: absolute;
    top: -200px;
    right: -200px;
    transition: ease 1s;
    opacity: 0;
    z-index: 1002;
  }
}
</style>
