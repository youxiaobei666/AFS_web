<template>
  <div class="container">
    <!-- 图片 -->
    <div class="img-area">
      <img
        class="img"
        src="https://pica.zhimg.com/100/v2-6f310f6a988b30a7ad92e5ce51298a40_r.jpg"
        alt=""
      />
    </div>
    <!-- 浮动区域 -->
    <div class="float-area">
      <div class="title-text">
        <span class="title" style="font-size: 44px">宠友社</span><br />
        <span>守护地球，和谐共存</span>
      </div>
      <div class="pointer">
        <img class="img" src="@/assets/icons/icon-point-right.png" alt="" />
      </div>
    </div>
    <!-- 评论区域 -->
    <div class="remark-area">
      <div class="part">
        <img src="@/assets/icons/comments.png" alt="" />
        <div class="text-com">617</div>
      </div>
      <div class="part">
        <img src="@/assets/icons/started.png" alt="" />
        <div class="text-com">5.8万</div>
      </div>
      <div class="part">
        <img src="@/assets/icons/share.png" alt="" />
        <div class="text-com">22</div>
      </div>
      <div class="part">
        <img src="@/assets/icons/price.png" alt="" />
        <div class="text-com">1233元</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import url('@/styles/fonts.scss');
.container {
  position: relative;
  width: 25%;
  height: auto;
  .img-area {
    width: 100%;
    height: 300px;
    text-align: center;
    overflow: hidden;
    .img {
      width: 100%;
      //height: 100%;
    }
  }

  .float-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 68px;
    left: 24px;
    width: 92%;
    height: 78px;

    .title-text {
      width: 40%;
      height: 100%;
      font-family: 'SourceHanSansCN-VF-2';
      color: rgba(196, 196, 196, 1);
      font-size: 20px;
    }
    .pointer {
      width: 44px;
      height: 44px;
      margin-top: 12px;
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .remark-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    height: 28px;
    margin-top: 38px;
    margin-left: 10px;
    color: #fff;
    .part {
      display: flex;
      align-items: center;
      .text-com {
        display: inline-block;
        width: 60px;
        height: 50px;
        line-height: 50px;
        margin-left: 20px;
      }
    }
  }
}
</style>
