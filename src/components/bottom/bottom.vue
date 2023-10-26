<template>
  <!-- 关于我们 ，联系我们等 -->
  <div class="about">
    <ul class="ul">
      <li class="li">相关链接</li>
      <li class="li">关于我们</li>
      <li class="li">联系我们</li>
      <li class="li">请求帮助</li>
      <li class="li">了解更多</li>
      <li class="li">隐私策略</li>
      <li class="li">商业支持</li>
    </ul>
  </div>
  <!-- 联系我们的方式 -->
  <div class="contact">
    <div class="contact-method">
      <span class="text">邮箱: 2146508650@qq.com</span>
      <span class="text">电话: 17718473047</span>
      <span class="text">地址: 江西省南昌市青山湖区</span>
    </div>
    <!-- 二维码 -->
    <div class="QR-code">
      <img class="img" src="@/assets/QR_code.png" alt="" />

      <div class="text-qr">扫一扫<br />联系我们</div>
    </div>
  </div>
  <!-- copyright -->
  <div class="copyright">COPYRIGHT @ 2023-2033 赣 ICP 备 10000 号</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about {
  width: 90%;
  height: 120px;

  // 调整关于我们模块的布局
  .ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    .li {
      list-style: none;
      width: 280px;
      height: 60px;
      line-height: 60px;
    }
  }
}

// 联系我们
.contact {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  //   左-联系方式
  .contact-method {
    width: 40%;
    height: 120px;

    .text {
      display: inline-block;
      width: 280px;
      height: 60px;
      line-height: 60px;
    }
  }
  //   右-二维码
  .QR-code {
    display: flex;
    width: 280px;
    height: 120px;
    position: relative;
    top: -10px;
    font-size: 20px;
    img {
      margin-right: 10px;
    }
    .text-qr {
      width: 80px;
      height: 50px;
      position: relative;
      top: 65px;
    }
  }
}

// copyright
.copyright {
  margin-top: 20px;
}
</style>
