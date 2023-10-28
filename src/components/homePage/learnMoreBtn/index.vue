<template>
  <!-- 了解详情按钮 -->
  <div class="know-more-btn">
    <span class="text">了解详情</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
/** 按钮 */
.know-more-btn {
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 387px;
  height: 82px;
  opacity: 1;
  border-radius: 50px;
  background: url(https://img.js.design/assets/img/64804da398bd569d2aac9331.png);
  background-size: cover;
  cursor: pointer;
  .text {
    /** 文本1 */
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 10px;
    line-height: 75px;
    color: rgba(59, 59, 59, 1);
    font-family: "SourceHanSansCN-VF-2";
    transition: ease 0.5s;
  }
  .text:hover {
    color: rgb(255, 255, 255);
    transition: ease 0.5s;
  }
}
</style>
