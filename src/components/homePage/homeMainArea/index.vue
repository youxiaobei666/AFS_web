<template>
  <!-- 大文字 -->
  <div class="main-show-text">
    <span class="font-1">宠友社</span><br /><span class="font-2"
  >你最正经的宠物顾问！</span
  >
  </div>
  <!-- 介绍 -->
  <div class="introduct-text">
    <span class="text-1">
      作为一家专注于宠物保护的组织，我们承诺为每个宠物提供无微不至的关爱和安全的庇护所。
      通过广泛的宣传、启发式的教育以及有意义的领养计划，我们致力于激发社会对宠物保护的意识，共同营造一个更加美好、宠物充满幸福的世界
    </span>
    <br />
    <br />
    <span class="text-2">
      组织建立以来，数千流浪宠物被我们组织悉心守护，温情关怀，引领它们归家。我们的愿望，是点亮宠物幸福的未来。
    </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import url("@/styles/fonts.scss");
/** 大标题 */
.main-show-text {
  position: absolute;
  top: 250px;
  left: 200px;
  width: 709px;
  height: 377px;
  font-size: 110px;
  font-weight: 400;
  letter-spacing: 0px;
  cursor: pointer;

  /** 文本1 */
  .font-1 {
    /** 文本1 */
    line-height: 143px;
    color: rgba(255, 234, 176, 1);
    font-family: "YouSheTitleRound";
  }
  .font-2 {
    /** 文本2 */
    line-height: 116.6px;
    color: rgba(255, 255, 255, 1);
    font-family: "PangMenZhengDaoBiaoTiTi";
  }
}

/** 主页标题文字 */
.introduct-text {
  position: absolute;
  top: 736px;
  left: 182px;
  width: 909px;
  height: 250px;
  font-weight: 400;
  letter-spacing: 0px;
  color: rgba(255, 255, 255, 1);
  font-family: "SourceHanSansCN-VF-2";
  cursor: pointer;
  background: linear-gradient(
      270deg,
      rgba(158, 157, 157, 0.81) 0%,
      rgba(31, 31, 31, 0.43) 100%
  );
  padding: 10px;
  .text-1 {
    /** 文本1 */
    font-size: 22px;
    line-height: 31.86px;
  }
  .text-2 {
    /** 文本1 */
    font-size: 30px;
    line-height: 43.44px;
  }
}
</style>
