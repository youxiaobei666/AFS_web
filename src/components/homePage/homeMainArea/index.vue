<template>
  <!-- 大文字 -->
  <div class="main-show-text">
    <span class="font-1">宠友社</span><br /><span class="font-2"
      >地球不只是人类的！</span
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
  <!--     按钮-->
  <learnMoreBtn class="learnBtn"></learnMoreBtn>
  <!-- 左右箭头 -->
  <div class="icons-point">
    <div class="tow-box">
      <img src="@/assets/icons/icon-point-left.png" alt="" />
    </div>
    <div class="tow-box">
      <img src="@/assets/icons/icon-point-right.png" alt="" />
    </div>
  </div>
  <!-- 社交账号图标 -->
  <icons class="icons"></icons>
</template>

<script setup>
import icons from '@/components/icons'
import learnMoreBtn from '@/components/homePage/learnMoreBtn'
import petInfoCard from '@/components/pet-info-card/petInfoCard'
import catIconText from '@/components/pet-info-card/catIconText'
import bottom from '@/components/bottom/bottom'
</script>

<style lang="scss" scoped>
@import url('@/styles/fonts.scss');
/** 大标题 */
.main-show-text {
  z-index: 1010;
  //position: absolute;
  //top: 250px;
  //left: 200px;
  margin-left: 100px;
  width: 80%;
  height: 277px;
  font-size: 110px;
  font-weight: 400;
  letter-spacing: 0px;
  cursor: pointer;

  /** 文本1 */
  .font-1 {
    /** 文本1 */
    line-height: 143px;
    color: rgba(255, 234, 176, 1);
    font-family: 'YouSheTitleRound';
  }
  .font-2 {
    /** 文本2 */
    line-height: 116.6px;
    color: rgba(255, 255, 255, 1);
    font-family: 'PangMenZhengDaoBiaoTiTi';
  }
}

/** 主页标题文字 */
.introduct-text {
  //position: absolute;
  //top: 736px;
  //left: 182px;
  margin-left: 100px;
  width: 909px;
  height: 250px;
  font-weight: 400;
  letter-spacing: 0px;
  color: rgba(255, 255, 255, 1);
  font-family: 'SourceHanSansCN-VF-2';
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
.learnBtn {
  margin-top: 100px;
  margin-left: 100px;
}
// 指针图标
.icons-point {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: absolute;
  top: 590px;
  right: 100px;
  width: 100px;
  height: 33px;
  .tow-box {
    width: 33px;
    height: 33px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

// 社交账号图标
.icons {
  position: absolute;
  top: 700px;
  right: 58px;
  width: 188px;
  height: 27px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
