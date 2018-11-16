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
      <p class="more">浏览更多</p>
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
            <ul class="list">
              <p>新闻标题新闻标题新闻标题</p>
              <p>2018-08-08</p>
              <p>
                新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
              </p>
            </ul>
          </div>
        </el-col>
      </el-row>
      <p class="more">浏览更多</p>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import Header from "../components/Header.vue";
export default {
  name: "index",
  components: {
    Header: Header
  },
  data() {
    return {
      arr: [1, 2, 3, 4],
      test: [1, 2]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
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
  padding: 60px 0;
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
  width: 150px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  border: 1px #003c56 solid;
  color: #003c56;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 1px;
}

.el-col {
  // margin: 5px;
  border-radius: 4px;
}

.news-box {

}

.box {
  height: 150px;
  margin: 10px;
  border: 1px solid #ccc;
}
.box .img {
  float: left;
}
.box .img img {
  width: 150px;
  height: 150px;
}
</style>
