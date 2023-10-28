<template>
  <div class="pet-infomation">

    <!-- 小猫图片和文字 -->
    <div class="cat-and-text-1">
      <catIconText></catIconText>
    </div>
    <!-- 动物显示区域 -->
    <div class="show-some-box">
      <petInfoCard class="pet-info-card"></petInfoCard>
      <petInfoCard class="pet-info-card"></petInfoCard>
      <petInfoCard class="pet-info-card"></petInfoCard>
    </div>
    <!-- 周刊的大模块 -->
<!--    <div class="pet-news">-->
<!--      &lt;!&ndash; 小猫图片和文字 &ndash;&gt;-->
<!--      <div class="cat-and-text-2">-->
<!--        <catIconText></catIconText>-->
<!--      </div>-->
<!--      &lt;!&ndash; 展示新闻 &ndash;&gt;-->
<!--      <div class="show-area">-->
<!--        &lt;!&ndash; 大图 &ndash;&gt;-->
<!--        <div class="box-1">-->
<!--          <img-->
<!--            src="https://img.js.design/assets/img/64835004b64fef683a064e1d.jpg#33c431c9f0ed527c554ac95b4e1cba72"-->
<!--          />-->
<!--          <div class="text">-->
<!--            1.重磅！世界宠物保护组织近日在尼加拉瓜进行宠物卫生援助-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; 小图 &ndash;&gt;-->
<!--        <div class="box-2">-->
<!--          <img-->
<!--            src="https://img.js.design/assets/img/6483520f46a287ff400a236e.jpg#2362e3333619a618a284a7d6c3dca32c"-->
<!--            alt=""-->
<!--          />-->
<!--          <div class="text">-->
<!--            2.重磅！联合国卫生组织颁布全球宠物卫...2023/8/12联合国卫生苦海到可楔上然勘查在是是桌上厚薄虹人勘查在人-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; 多图 &ndash;&gt;-->
<!--        <div class="box-3">-->
<!--          <div class="box-3-flex">-->
<!--            <div class="img">-->
<!--              <img-->
<!--                src="https://img.js.design/assets/img/648353ddbfcc2e8f769a0d3d.jpg#8526e9b8f755cb88f563527e490a88cb"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="text">3.据悉，上海宠物保护组织 协助警方..</div>-->
<!--          </div>-->
<!--          <div class="box-3-flex">-->
<!--            <div class="img">-->
<!--              <img-->
<!--                src="https://img.js.design/assets/img/648353f3f5fe553edc8b7f4f.jpg#22fb96dd24fb8e7002cc5bfa573bb363"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="text">3.据悉，上海宠物保护组织 协助警方..</div>-->
<!--          </div>-->
<!--          <div class="box-3-flex">-->
<!--            <div class="img">-->
<!--              <img-->
<!--                src="https://img.js.design/assets/img/648353e581f270b4b02fedc9.jpg#d663ae7de55055e98cbc777c03730bec"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="text">3.据悉，上海宠物保护组织 协助警方..</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    &lt;!&ndash; footer &ndash;&gt;-->
<!--    <div class="footer">-->
<!--      <bottom></bottom>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import icons from "@/components/icons";
import petInfoCard from "@/components/pet-info-card/petInfoCard";
import catIconText from "@/components/pet-info-card/catIconText";
import bottom from "@/components/bottom/bottom";
</script>

<style lang="scss" scoped>
.pet-infomation {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

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

  // 显示区域
  .show-some-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 50px;

  }

  // 左上角的图标
  .cat-and-text-1 {

  }
  // 周刊
  .pet-news {
    .cat-and-text-2 {
      position: absolute;
      top: 1400px;
      left: 126px;
      height: 50px;
    }
    // 展示区
    .show-area {
      display: flex;
      justify-content: space-between;
      align-items: start;
      position: absolute;
      top: 1560px;
      left: 126px;
      width: 1652px;
      height: 426px;
      /** 文本1 */
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 26.38px;
      color: rgba(255, 255, 255, 1);

      .box-1 {
        width: 640px;
        height: 446px;
        img {
          width: 640px;
          height: 416px;
        }
        .text {
          width: 612px;
          height: 53px;
        }
      }
      .box-2 {
        width: 420px;
        height: 380px;

        img {
          width: 413px;
          height: 276px;
        }
        .text {
          width: 373px;
          height: 82px;
        }
      }
      // 多图
      .box-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 488px;
        height: 413px;
        .box-3-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 488px;
          height: 214px;
          .img {
            width: 185px;
            height: 124px;
            overflow: hidden;
          }
          .text {
            width: 273px;
            height: 96px;
          }
        }
      }
    }
  }

  // 定位内部函组件
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 320px;
    color: #fff;
  }
}
</style>
