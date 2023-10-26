<template>
  <div class="container">
    <!-- 图片 -->
    <div class="img-area">
      <img
        src="https://img.js.design/assets/img/64834a726d8b527fd3240f7a.jpg#a3e9f65e704c52af03a044c9c9185089"
        alt=""
      />
    </div>
    <!-- 浮动区域 -->
    <div class="float-area">
      <div class="title-text">
        <span class="title" style="font-size: 23px">鬃毛犬</span><br />
        <span>来自墨西哥约法三章</span>
      </div>
      <div class="pointer">
        <img src="@/assets/icons/icon-point-right.png" alt="" />
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
@import url("@/styles/fonts.scss");
.container {
  position: relative;
  width: 527px;
  height: 405px;
  .img-area {
    width: 100%;
    height: 343px;
    text-align: center;
  }

  .float-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 268px;
    left: 24px;
    width: 472px;
    height: 58px;

    .title-text {
      width: 200px;
      height: 100%;
      font-family: "SourceHanSansCN-VF-2";
      color: rgba(196, 196, 196, 1);
    }
    .pointer {
      width: 33px;
      height: 33px;
      margin-top: 12px;
    }
  }

  .remark-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 469px;
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
