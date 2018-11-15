<template>
  <div class="index">
    <Header></Header>
    <div class="banner" id="head">
      <img src="../../static/images/banner.png">
    </div>
    <section class="products">
      <p class="section-title" id="product">
        <span class="title-cn">代理产品</span>
        <span class="title-en">AGENT PRODUCTS</span>
        <img src="../../static/images/arrow-down.png">
      </p>
      <div class="product-box">
        <ul class="boxs-ul">
          <li v-for="i in arr">
            <router-link to="">
              <div class="img-box">
                <img src="../../static/images/product1.png">
              </div>
              <p class="box-title">
                无线音箱
              </p>
            </router-link>
          </li>
        </ul>
      </div>
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
      arr: [1, 2, 3, 4]
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
      margin-bottom: 5px;
    }
    .title-cn {
      font-size: 22px;
      font-weight: 900;
      letter-spacing: 3px;
      color: #222;
    }
    .title-en {
      color: #777;
      letter-spacing: 1px;
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
        height: 380px;
        border-radius: 3px;
        overflow: hidden;
        width: calc(23%);
        .img-box {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .box-title {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 38px;
          font-size: 14px;
          font-weight: bold;
          line-height: 38px;
          text-align: center;
          color: #fff;
          background: rgba(103, 103, 108, 0.75);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
  border: 1px red solid;
  color: red;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>
