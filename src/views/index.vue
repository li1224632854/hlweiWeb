<template>
  <div class="index">
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
      <el-carousel :interval="4000" arrow="always" height="600px">
        <el-carousel-item v-for="(item,index) in 2" :key="item">
          <img :src="'../../static/images/banner' + index + '.jpg'">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 产品 解决方案  -->
    <div id="product"></div>
    <section class="products">
      <p class="section-title">
        <span class="title-cn">业务范围</span>
        <span class="title-en">BUSINESS SCOPE</span>
        <img src="../../static/images/arrow-down.png">
      </p>
      <div class="product-box">
        <ul class="boxs-ul">
          <li v-for="(val,i) in products" :key="i">
            <!-- <router-link :to="'/product/detail/' + i"> -->
            <router-link to="#">
              <div class="img-box">
                <img :src="'../../static/images/' + val.imgUrl">
              </div>
              <div class="box-hover">
                <p class="hover-title1">{{val.title}}</p>
                <p class="hover-title2">{{val.intro}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <router-link to="#">
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
            <router-link to="/solution">
              <div class="left-img">
                <img src="../../static/images/solution0.png" alt="BT5.0低功耗TWS解决方案">
              </div>
              <p class="left-title">
                BT5.0低功耗TWS解决方案
              </p>
            </router-link>
          </div>
        </div>
        <div class="box_right">
          <ul class="boxs-ul right-ul">
            <li v-for="(val,i) in solutions" :key="i">
              <!-- <router-link :to="'/product/detail/' + i"> -->
              <router-link to="/solution">
                <div class="img-right">
                  <img :src="'../../static/images/'+ val.imgUrl " v-bind="val.title">
                </div>
                <p class="box-title-right">
                  {{val.title}}
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="#">
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
                  {{ val.content | untilNews}}
                </div>
              </div>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <router-link to="/news">
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
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import {
  Form,
  FormItem,
  Dialog,
  Input,
  Button,
  Row,
  Col,
  Message,
  Carousel,
  CarouselItem
} from "element-ui";

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.prototype.$message = Message;

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
          imgUrl: 'business0.jpeg',
          title: "硬件开发",
          intro: "10年硬件设计研发团队，专业私模定制，耳机方案开发"
        },
        {
          imgUrl: 'business1.png',
          title: "软件开发",
          intro: "TWS&ANC主动降噪耳机定制UI及完整软件开发方案"
        },
        { 
          imgUrl: 'business2.png',
          title: "芯片代理", 
          intro: "专业BES全系列芯片方案研发、设计、销售" },
        {
          imgUrl: 'business3.png',
          title: "AI语音耳机方案智能研发",
          intro: "专注BES芯片应用，搭载国内外互联网平台， AI智能语音方案"
        },
        {
          imgUrl: 'business4.png',
          title: "完整测试系统",
          intro: "蓝牙AP、8852B、网分专业测试系统设备"
        }
      ],
      solutions: [{
        imgUrl: 'solution1.png',
        title: "ANC数字主动降噪解决方案"
      }, {
        imgUrl: 'solution2.png',
        title: "低功耗BT5.0单声道耳机解决方案"
      }, {
        imgUrl: 'solution3.png',
        title: "低功耗BT5.0立体声耳机解决方案"
      }, {
        imgUrl: 'solution4.png',
        title: "AI语音智能耳机方案"
      }],
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
      if (v.length > 85) {
        return v.substring(0, 85) + "...";
      } else {
        return v;
      }
    },
    utilLength(v) {
      if (v.length > 35) {
        // console.log(v.length);
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
// footer {
//   margin-top: 20px;
// }
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
        margin: 0 5px;
        height: 262px;
        border-radius: 3px;
        overflow: hidden;
        width: calc(19%);
        .box-hover {
          position: absolute;
          padding: 5px;
          width: 100%;
          height: 300px;
          top: 0;
          left: 0;
          z-index: 10;
          opacity: 0;
          .hover-title1 {
            color: #fff;
            font-size: 18px;
            line-height: 150px;
          }
          .hover-title2 {
            color: #fff;
            font-size: 15px;
            padding-right: 5px;
          }
        }
        .box-hover:hover {
          background: #3f404f;
          text-transform: uppercase;
          opacity: 0.9;
          transition: All 0.4s ease-in-out;
          -webkit-transition: All 0.4s ease-in-out;
          -moz-transition: All 0.4s ease-in-out;
          -o-transition: All 0.4s ease-in-out;
        }
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
        height: 295px;
        width: calc(20%);
        margin-bottom: 10px;
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
          bottom: 0px;
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
  margin-top: -15px;
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
