<template>
  <div class="detail">
    <div class="detail-left">
      <el-card class="box-card">
        <carousel :starting-image="0" :images="images " :auto-slide-interval="3000"></carousel>
      </el-card>
    </div>
    <div class="detail-right">
      <h1 class="right-title">
        <span v-if="params === '0'"> BES2300L/H/Z</span>
        <span v-else-if="params === '1'"> BES2000IS/Y</span>
        <span v-else> WT-200M/S</span>
      </h1>
      <p class="content">
        先进的CMOS工艺全集成包括射频，电源管理，音频以及Cortex-M4F MCU<br /> 支持Bluetooth® v4.2标准，A2DP v1.3/ACRCP v1.5/HFP v1.5<br /> 支持多端EQ调整，回声消除及重低音增强
        <br /> 最高支持400MHz的ARM Cortex-M4F MCU操作<br /> 片上支持8Mb Flash方便客户定制化程序开发<br /> 输入电压范围3.1V～5.5V
        <br /> 支持片内低功耗晶体（LPO）以及低功耗应用
        <br /> 支持USB 2.0 FS<br /> HIFI立体声音频输出，DAC SNR 105dB；采样率支持范围8KHz ～ 192KHz<br /> HIFI立体声音频输入，ADC SNR 96dB；采样率支持范围8KHz ～ 192KHz<br />
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "element-ui";
Vue.use(Card);
import Carousel from "../../components/Carousel.vue";
export default {
  name: "detail",
  components: {
    Carousel: Carousel
  },
  data() {
    return {
      params: 0,
      images: [
        {
          id: "0",
          big: "../../../static/images/product0.png",
          thumb: "../../../static/images/product0.png"
        },
        {
          id: "1",
          big: "../../../static/images/product1.png",
          thumb: "../../../static/images/product1.png"
        },
        {
          id: "2",
          big: "../../../static/images/product2.png",
          thumb: "../../../static/images/product2.png"
        },
        {
          id: "3",
          big: "../../../static/images/product3.png",
          thumb: "../../../static/images/product3.png"
        },
        {
          id: "4",
          big: "../../../static/images/product4.png",
          thumb: "../../../static/images/product4.png"
        },
        {
          id: "5",
          big: "../../../static/images/product5.png",
          thumb: "../../../static/images/product5.png"
        },
        {
          id: "6",
          big: "../../../static/images/product6.png",
          thumb: "../../../static/images/product6.png"
        },
        {
          id: "7",
          big: "../../../static/images/product7.png",
          thumb: "../../../static/images/product7.png"
        },
        {
          id: "8",
          big: "../../../static/images/product8.png",
          thumb: "../../../static/images/product8.png"
        }
      ]
    };
  },
  mounted() {
    this.params = this.$route.params.id;
    if (this.params === "0") {
      this.images = this.images.slice(0, 3);
    } else if (this.params === "1") {
      this.images = this.images.slice(3, 6);
    } else {
      this.images = this.images.slice(6, 9);
    }
  }
};
</script>

<style scoped lang="less">
.detail {
  padding-top: 120px;
  width: 1200px;
  margin: 0 auto;
  height: 600px;
  .detail-left {
    width: 40%;
    float: left;
    height: 300px;
    text-align: center;
  }
  .detail-right {
    float: left;
    width: 40%;
    margin: 24px 0 0 150px;
    line-height: 30px;
    font-size: 14px;
    color: #777;
    .right-title {
      color: #000;
      font-size: 30px;
      height: 70px;
      line-height: 70px;
    }
  }
}
</style>
