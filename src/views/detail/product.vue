<template>
  <div class="detail">
    <div class="detail-left">
      <img :src="'../../../static/images/'+ 'detail'+1+'.png'">
    </div>
    <div class="detail-right">
      <h1 class="right-title">BES2000U/A</h1>
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
export default {
  name: "detail",
  data() {
    return {};
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
    width: 35%;
    float: left;
    padding: 50px 0;
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
