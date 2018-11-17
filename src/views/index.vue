<template>
  <div class="index">
    <Header></Header>

    <!-- 留言 -->
    <div class="message-box">
      <a @click="showMessageBox = true">
        <img src="../../static/images/message.png">
      </a>
    </div>

    <el-dialog title="在线留言" :visible.sync="showMessageBox">
      <el-form :model="form">
        <el-form-item label="怎么称呼" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="form.contact"></el-input>
        </el-form-item>

        <el-form-item label="常用邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item label="您的留言" :label-width="formLabelWidth">
          <el-input type="textarea" rows="6" v-model="form.message"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showMessageBox = false">取 消</el-button>
        <el-button type="primary" @click="submitMessage">确 定</el-button>
      </div>
    </el-dialog>

    <!-- banner轮播图 -->
    <div class="banner" id="head">
      <img src="../../static/images/banner.png">
    </div>

    <!-- 产品 解决方案  -->
    <div id="product"></div>
    <section class="products">
      <p class="section-title">
        <span class="title-cn">代理产品</span>
        <span class="title-en">AGENT PRODUCTS</span>
        <img src="../../static/images/arrow-down.png">
      </p>
      <div class="product-box">
        <ul class="boxs-ul">
          <li v-for="(val,i) in products">
            <router-link to="">
              <div class="img-box">
                <img :src="'../../static/images/'+ 'product'+i+'.png'">
              </div>
              <div class="box-title">
                <div class="title1">
                  <p class="title1_1">{{val.title}}</p>
                  <p class="title1_2">{{val.intro | utilLength}}</p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <router-link to="">
        <p class="more product-more">
          浏览更多
        </p>
      </router-link>
    </section>
    <section class="products solution">
      <p class="section-title">
        <span class="title-cn">解决方案</span>
        <span class="title-en">SOLUTION</span>
        <img src="../../static/images/arrow-down.png">
      </p>
      <div class="product-box solution-box">
        <div class="box_left">
          <div class="box_big">
            <router-link to="">
              <div class="left-img">
                <img src="../../static/images/solution0.png">
              </div>
              <p class="left-title">
                无线耳机解决方案
              </p>
            </router-link>
          </div>
        </div>
        <div class="box_right">
          <ul class="boxs-ul right-ul">
            <li v-for="(val,i) in solutions">
              <router-link to="">
                <div class="img-right">
                  <img :src="'../../static/images/'+ 'solution'+(i+1)+'.png'">
                </div>
                <p class="box-title-right">
                  {{val}}
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="">
        <p class="more">浏览更多</p>
      </router-link>
    </section>
    <!-- end 产品 解决方案  -->

    <!-- 新闻资讯 -->
    <div id="news"></div>
    <section class="products">
      <p class="section-title">
        <span class="title-cn">新闻资讯</span>
        <span class="title-en">NEWS IFMATION</span>
        <img src="../../static/images/arrow-down.png">
      </p>

      <el-row :gutter="20">
        <el-col :span="12" v-for="(val,i) in news" :key="i" class="news-box">
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
                {{ val.content | untilNews}}
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <router-link to="">
        <p class="more more-news">浏览更多</p>
      </router-link>
    </section>
    <!-- end 新闻资讯 -->

    <!-- 关于我们 -->
    <section class="products" id="abouts">
      <p class="section-title about-title">
        <span class="title-cn">关于我们</span>
        <span class="title-en">ABOUT US</span>
        <img src="../../static/images/arrow-down.png">
      </p>
    </section>
    <!-- end 关于我们 -->

    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "index",
  components: {
    Header: Header,
    Footer: Footer
  },
  data() {
    return {
      showMessageBox: false,
      formLabelWidth: "100px",
      form: {
        name: "",
        contact: "",
        email: "",
        message: ""
      },
      arr: [1, 2, 3, 4],
      products: [
        {
          title: "无线对耳",
          intro:
            "先进的CMOS工艺全集成包括射频，电源管理，音频以及Cortex-M4F MCU"
        },
        {
          title: "无线对箱",
          intro: "支持Bluetooth® v4.2标准，A2DP v1.3/ACRCP v1.5/HFP v1.5"
        },
        { title: "智能音箱", intro: "支持多端EQ调整，回声消除及重低音增强" },
        {
          title: "Lightening接口主动降噪耳机",
          intro:
            "最高支持400MHz的ARM Cortex-M4F MCU操作片上支持8Mb Flash方便客户定制化程序开发"
        }
      ],
      solutions: [
        "无线对箱解决方案",
        "手机标配数字耳机解决方案",
        "降噪耳机解决方案",
        "智能音箱解决方案"
      ],
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
  filters: {
    untilNews(v) {
      if (v.length > 100) {
        return v.substring(0, 85) + "...";
      } else {
        return v;
      }
    },
    utilLength(v) {
      if (v.length > 38) {
        console.log(v.length);
        return v.substring(0, 35) + "...";
      } else {
        return v;
      }
    }
  },
  mounted() {},
  methods: {
    submitMessage() {
      this.showMessageBox = false;
      this.$message({
        message: "提交成功，感谢留言",
        type: "success"
      });
    }
  }
};
</script>

<style lang="less" scoped>
footer {
  margin-top: 20px;
}
.index {
  padding-bottom: 10px;
}
.banner {
  height: 600px;
  width: 100%;
  img {
    height: 600px;
    width: 100%;
  }
}

.products {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  .section-title {
    margin-top: 110px;
    span {
      display: block;
      margin-bottom: 7px;
    }
    .title-cn {
      font-size: 22px;
      font-weight: 900;
      letter-spacing: 1px;
      color: #222;
    }
    .title-en {
      color: #777;
      letter-spacing: 1px;
      margin-bottom: 7px;
    }
  }
  .product-box {
    padding: 60px 0;
    overflow: hidden;
    .boxs-ul {
      margin: 0 auto;
      li {
        float: left;
        position: relative;
        margin: 0 12px;
        height: 375px;
        border-radius: 3px;
        overflow: hidden;
        width: calc(23%);
        .img-box {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 300px;
          }
        }
        .box-title {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          // height: 91px;
          background: #fff;
          .title1 {
            text-align: left;
            padding: 10px;
            letter-spacing: 1px;
            .title1_1 {
              padding: 5px;
              font-size: 17px;
              font-weight: bold;
              color: #333;
            }
            .title1_2 {
              color: #666;
              padding: 5px;
              font-size: 14px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
}

.solution {
  padding: 0px 0;
  overflow: hidden;
  .box_left {
    margin: 0 auto;
    .box_big {
      float: left;
      position: relative;
      margin: 0 12px;
      height: 600px;
      border-radius: 3px;
      overflow: hidden;
      width: 46%;
      .left-img {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .left-title {
        position: absolute;
        letter-spacing: 2px;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60px;
        font-size: 16px;
        font-weight: bold;
        line-height: 60px;
        text-align: center;
        color: #fff;
        background: rgba(103, 103, 108, 0.75);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .box_right {
    .right-ul {
      li {
        height: 322px;
        width: calc(20%);
        .img-right {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            // height: 100%;
          }
        }
        .box-title-right {
          position: absolute;
          left: 0;
          bottom: 45px;
          font-size: 15px;
          width: 100%;
          color: #fff;
          background: rgba(103, 103, 108, 0.75);
          height: 35px;
          line-height: 35px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          letter-spacing: 2px;
        }
      }
    }
  }
}

.more {
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: 1px #003c56 solid;
  color: #003c56;
  border-radius: 4px;
  font-size: 14px;
  letter-spacing: 1px;
}

.more-news {
  margin-top: 100px;
}
.product-more {
  margin-top: 50px;
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
      // width: 150px;
      // height: 150px;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .news-body {
    width: 73%;
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
        width: 67%;
      }
      .news-date {
        float: right;
        width: 20%;
        color: #999;
        font-size: 12px;
        padding-top: 13px;
        padding-right: 5px;
      }
    }
    .news-bottom {
      height: 80%;
      overflow: hidden;
      float: left;
      padding: 5px 5px 5px 15px;
      text-align: left;
      line-height: 35px;
      font-size: 14px;
      color: #666;
    }
  }
}
.about-title {
  margin-bottom: 70px;
}
.message-box {
  position: absolute;
  z-index: 500;
  right: 0;
  top: 1180px;
  img {
    width: 50px;
    height: 100px;
  }
}
.el-row {
  margin-top: 70px;
}
.solution-box {
  margin-top: 10px;
}
</style>
