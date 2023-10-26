<template>
  <!-- 小猫图标和文字 -->
  <div class="cat-and-text">
    <div class="cat-img">
      <img src="@/assets/icons/icon-pet.png" alt="" />
    </div>
    <div class="right-text">
      <img src="@/assets/pet_info.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
// 猫和文字
.cat-and-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 245px;
  height: 102px;
  .right-text {
    width: 112px;
    height: 53px;
  }
}
</style>
