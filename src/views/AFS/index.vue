<template>
  <div class="container">
<!--    &lt;!&ndash;    背景图&ndash;&gt;-->
    <div class='img-container'>
<!--      <img class='img' src='https://picx.zhimg.com/100/v2-a56efe473f44b42e17b61ccc22b74c9f_r.jpg'  alt=''/>-->
    </div>
    <!-- 导航栏 -->
    <navbar></navbar>

    <!-- 主页和介绍 -->
    <homeMainArea></homeMainArea>
    <!-- 动物展示和新闻 -->
    <petInfo></petInfo>
  </div>
</template>

<script setup>
import navbar from '@/components/homePage/navbar'
import homeMainArea from "@/components/homePage/homeMainArea";
import petInfo from "@/components/homePage/petInfo";
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto;
  //background-color: #b04387;
  background-size: cover;
  //background: url("https://picx.zhimg.com/100/v2-a56efe473f44b42e17b61ccc22b74c9f_r.jpg") no-repeat;
  //background: url("https://pic4.zhimg.com/100/v2-e94c67d974bdd18fbcef242106eb5ca1_r.jpg") no-repeat;
  //background: url("https://pic1.zhimg.com/100/v2-ff0b96c24bce37064d14d98c9da5b2a2_r.jpg") no-repeat;
  background: url("https://picx.zhimg.com/100/v2-885c8dfa4cd3b3a19e85705e552e5c97_r.jpg") no-repeat;
  //background: url("https://pica.zhimg.com/100/v2-2a9d4fc54196691f461a96821a32cb12_r.jpg") no-repeat;
  .img-container {
    position: absolute;
    width: 100%;
    height: auto;

    .img {
      width: 100%;
      height: 100%;
    }
  }

}
</style>
