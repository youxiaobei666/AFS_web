<template>
  <div class="container">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 按钮 -->
    <learnMoreBtn></learnMoreBtn>
    <!-- 主页和介绍 -->
    <homeMainArea></homeMainArea>
    <!-- 动物展示和新闻 -->
    <petInfo></petInfo>
  </div>
</template>

<script setup>
import navbar from '@/components/homePage/navbar'
import homeMainArea from "@/components/homePage/homeMainArea";
import learnMoreBtn from "@/components/homePage/learnMoreBtn";
import petInfo from "@/components/homePage/petInfo";
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #6e156f;
  background: url("https://img.js.design/assets/img/648357e8c15ab2a0750ad4b8.png#a56efe473f44b42e17b61ccc22b74c9f");
}
</style>
