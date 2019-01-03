<template>
  <div class="products">
    <div class="product-box">
      <div class="img-box_left">
        <img :src="'../../../static/images/detail0.png'" class="main_img">
      </div>
      <ul class="boxs-ul">
        <li v-for="(val,i) in products" :key="i">
          <router-link :to="'/product/detail/' + 0">
            <div class="img-box">
              <img :src="'../../../static/images/'+ val.imgUrl">
            </div>
            <div class="box-title">
              <div class="title1">
                <p class="title1_1">{{val.title}}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="img-box_left">
        <img :src="'../../../static/images/detail1.png'" class="main_img">
      </div>
      <ul class="boxs-ul">
        <li v-for="(val,i) in products1" :key="i">
          <router-link :to="'/product/detail/' + 1">
            <div class="img-box">
              <img :src="'../../../static/images/'+ val.imgUrl">
            </div>
            <div class="box-title">
              <div class="title1">
                <p class="title1_1">{{val.title}}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="img-box_left">
        <img :src="'../../../static/images/detail2.png'" class="main_img">
      </div>
      <ul class="boxs-ul">
        <li v-for="(val,i) in products2" :key="i">
          <router-link :to="'/product/detail/' + 2">
            <div class="img-box">
              <img :src="'../../../static/images/'+ val.imgUrl">
            </div>
            <div class="box-title">
              <div class="title1">
                <p class="title1_1">{{val.title}}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      products: [
        {
          imgUrl: 'product0.png',
          title: "BT5.0蓝牙对耳方案",
          intro: ""
        },
        {
          imgUrl: 'product1.png',
          title: "BT5.0蓝牙对耳方案",
          intro: ""
        },
        {
          imgUrl: 'product2.png',
          title: "BT5.0蓝牙对耳方案",
          intro: ""
        }
      ],
      products1: [
        {
          imgUrl: 'product3.png',
          title: "BES2000IS/2300Y",
          intro: ""
        },
        {
          imgUrl: 'product4.png',
          title: "BES2000IS/2300Y",
          intro: ""
        },
        {
          imgUrl: 'product5.jpg',
          title: "BES2000IS/2300Y",
          intro: ""
        }
      ],
      products2: [
        {
          imgUrl: 'product6.png',
          title: "低功耗5.0、单声道、立体式耳机方案",
          intro: ""
        },
        {
          imgUrl: 'product7.png',
          title: "低功耗5.0、单声道、立体式耳机方案",
          intro: ""
        },
        {
          imgUrl: 'product8.png',
          title: "低功耗5.0、单声道、立体式耳机方案",
          intro: ""
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.products {
  padding-top: 80px;
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  .product-box {
    padding: 20px 0;
    overflow: hidden;
    .img-box_left {
      float: left;
      width: 23%;
      height: 318px;
      float: left;
      position: relative;
      cursor: pointer;
      background: #fff;
      margin: 12px;
      border-radius: 3px;
      .main_img {
        margin-top: 50px;
        width: 95%;
      }
    }
    .boxs-ul {
      width: 75%;
      float: left;
      margin: 0 auto;
      li {
        float: left;
        position: relative;
        margin: 12px;
        height: 318px;
        border-radius: 3px;
        overflow: hidden;
        // width: calc(25%);
        width: calc(30%);
        // margin-right: 36px;
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
          letter-spacing: 2px;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 40px;
          font-size: 15px;
          font-weight: bold;
          line-height: 40px;
          text-align: center;
          color: #fff;
          background: rgba(103, 103, 108, 0.75);
        }
      }
    }
  }
}
</style>
