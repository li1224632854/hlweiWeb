<template>
  <div class="news">
    <el-row :gutter="20">
      <el-col :span="24" v-for="(val,i) in news" :key="i" class="news-box">
        <router-link :to="'/news/detail/' + i">
          <div class="box">
            <div class="img">
              <img :src="'../../static/images/'+ 'news'+i+'.png'">
            </div>
            <div class="news-body">
              <div class="news-top">
                <p class="news-title">{{val.title}}</p>
                <p class="news-date">{{val.date}}</p>
              </div>
              <div class="news-bottom">
                {{ val.content}}
              </div>
            </div>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col } from "element-ui";

Vue.use(Row);
Vue.use(Col);

export default {
  name: "news",
  data() {
    return {
      news: [
        {
          title: "蓝牙4.2双模HiFi音频：BES恒玄FWS全无线耳机方案BES2000IZ",
          date: "2018-06-21",
          content:
            "有一个手机品牌曾经被人调侃道，它是一家靠耳机赚钱的手机厂商。不过魅族自己好歹也是靠音频产品起家的，其推出的魅族M3和魅族M6更是在北京奥运会那段旗舰风靡大街小巷，被誉为是MP3之中的雷克萨斯的产品，可见其品质和口碑之大。不仅如此，魅族在一些产品之中还直接随机附送了当时的耳机界巨头森海塞尔的MX系列耳机，直接让用户一步到位欣赏高品质音乐。转眼间，魅族已经推出数代手机，耳机也来到了TWS真无线蓝牙耳机开始普及的时代，而TWS真无线蓝牙耳机的心脏，主控芯片在过去一年呈现出三分天下的态势，其中BES恒玄科技更是我们的国产之秀。魅族这个在音频领域积累了十余年的公司在这个跨世代的时候推出的第一款TWS真无线蓝牙耳机，就采用了BES恒玄科技的最新TWS真无线蓝牙耳机方案BES2000-IZ。"
        },
        {
          title:
            "第六届松山湖中国IC创新高峰论坛-恒玄科技推出全球第一颗全集成自适应主动降噪双模蓝牙耳机芯片-BES1000",
          date: "2017-06-04",
          content:
            "耳机有几十年的历史，过去十几年间，耳机技术有了两大变革，一个是有源降噪，一个是无线蓝牙，Beats去年推出了带主动降噪功能的蓝牙耳机，屡获大奖，但是售价要在2000元以上。而我们要做的，就是用高度集成高性能的芯片让高端耳机更普及"
        },
        {
          title: "松山湖2017九大中国芯，哪些又会成为新爆款？",
          date: "2017-05-27",
          content:
            "恒玄科技此次带来的是BES2200系列芯片支持5路模拟mic或者8路数字mic，集成Cortex-M4F CPU作为处理器，超低功耗设计，除了传统的蓝牙耳机，音箱功能外，该芯片特别为类似AirPods的TWS蓝牙真无线和类似Amazon Tap/Dot的产品做了优化处理。在设计Tap/Dot产品时，该芯片可以直接支持4路麦克风beamforming运算；或者将8个麦克风的数据预处理以后交给后端的AP来处理。同时该CPU集成第三方语音激活算法，可以通过BES2200芯片的BLE功能，唤醒手机APP和后台云服务器，在“只动口不动手”的情况下打通：耳机/蓝牙音箱到手机到云端的语音助手链路。可应用于语音多频、电话会议系统、智能音箱等等。恒玄科技市场总监龚建表示，在TWS耳机方面，BES2200系列功耗仅为10mA，是目前除W1芯片外功耗最低的产品。而且拥有全Flash，可以执行各种算法。支持SBC、OPUS、AAC等多种Codec。Vbat最高支持5V，因此可以支持更大容量的电池，使待机时间更长。预计2017年Q3推出"
        },
        {
          title: "智能音箱里的芯智汇模拟芯",
          date: "2017-4-30",
          content:
            "近日，芯智汇在智能语音开发者大会上，向业界全面的展示了他们在智能音箱领域的完整的电源和音频解决方案。这套解决方案的公布，获得在场开发者广泛关注"
        }
      ]
    };
  },
  filters: {}
};
</script>

<style scoped lang="less">
.news {
  padding-top: 80px;
  width: 1000px;
  margin: 0 auto;
}
.box {
  height: 150px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  .img {
    float: left;
    width: 150px;
    height: 150px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .news-body {
    width: 83%;
    height: 150px;
    float: left;
    .news-top {
      height: 20%;
      .news-title {
        float: left;
        padding-top: 10px;
        padding-left: 12px;
        color: #333;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 88%;
      }
      .news-date {
        float: right;
        color: #999;
        font-size: 12px;
        padding-top: 13px;
      }
    }
    .news-bottom {
      height: 70%;
      float: left;
      width: 100%;
      padding: 5px 5px 5px 15px;
      text-align: left;
      line-height: 35px;
      font-size: 14px;
      color: #666;
      overflow: hidden;
    }
  }
}
</style>
