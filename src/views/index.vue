<template>
  <div class="index">
    <Header></Header>
    <div class="banner" id="head">
      <img src="../../static/images/banner.png">
    </div>

    <section class="products" id="product">
      <p class="section-title">
        <span class="title-cn">代理产品</span>
        <span class="title-en">AGENT PRODUCTS</span>
        <img src="../../static/images/arrow-down.png">
      </p>
      <div class="product-box">
        <ul class="boxs-ul">
          <li v-for="i in arr">
            <router-link to="">
              <div class="img-box">
                <img :src="'../../static/images/'+ 'product'+i+'.png'">
              </div>
              <div class="box-title">
                <div class="title1">
                  <p class="title1_1">无线对箱</p>
                  <p class="title1_2">内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介</p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <p class="more product-more">浏览更多</p>
    </section>

    <section class="products solution">
      <p class="section-title">
        <span class="title-cn">解决方案</span>
        <span class="title-en">SOLUTION</span>
        <img src="../../static/images/arrow-down.png">
      </p>
      <div class="product-box">
        <div class="box_left">
          <div class="box_big">
            <router-link to="">
              <div class="left-img">
                <img src="../../static/images/solution1.png">
              </div>
              <p class="left-title">
                无线耳机解决方案
              </p>
            </router-link>
          </div>
        </div>
        <div class="box_right">
          <ul class="boxs-ul right-ul">
            <li v-for="i in arr">
              <router-link to="">
                <div class="img-right">
                  <img src="../../static/images/product1.png">
                </div>
                <p class="box-title-right">
                  无线音箱
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <p class="more">浏览更多</p>
    </section>

    <section class="products" id="news">
      <p class="section-title">
        <span class="title-cn">新闻资讯</span>
        <span class="title-en">NEWS IFMATION</span>
        <img src="../../static/images/arrow-down.png">
      </p>

      <el-row :gutter="20">
        <el-col :span="12" v-for="i in arr" :key="i" class="news-box">

          <div class="box">
            <div class="img">
              <img :src="'../../static/images/'+ 'news'+i+'.png'">
            </div>
            <div class="news-body">
              <div class="news-top">
                <p class="news-title">新闻标题新闻标题新闻标题新闻标题新</p>
                <p class="news-date">2018-08-08</p>
              </div>
              <div class="news-bottom">
                {{ news | aa}}
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <p class="more more-news">浏览更多</p>
    </section>

    <section class="products" id="news">
      <p class="section-title about-title">
        <span class="title-cn">关于我们</span>
        <span class="title-en">ABOUT US</span>
        <img src="../../static/images/arrow-down.png">
      </p>
    </section>
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
      arr: [1, 2, 3, 4],
      test: [1, 2],
      news:
        "新闻内容新闻内容新闻内容新闻内容新闻内容新新闻内容新闻内容新闻内容新闻内内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容容新闻内容新闻内容闻内容闻内容闻内内容闻内内容闻内内容闻"
    };
  },
  filters: {
    aa(a) {
      if (a.length > 86) {
        return a.substring(0, 86) + "...";
      } else {
        return a;
      }
    }
  },
  mounted() {},
  methods: {}
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
        height: 400px;
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
          color: #3d3d3d;
          background: #fff;
          .title1 {
            text-align: left;
            padding: 10px;
            letter-spacing: 1px;
            .title1_1 {
              padding: 5px;
              font-size: 16px;
              font-weight: bold;
            }
            .title1_2 {
              color: #555;
              padding: 5px;
              font-size: 14px;
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
</style>
