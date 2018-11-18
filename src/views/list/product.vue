<template>
  <div class="products">
    <div class="product-box">
      <ul class="boxs-ul">
        <li v-for="(val,i) in products">
          <router-link :to="'/product/detail/' + i">
            <div class="img-box">
              <img :src="'../../../static/images/'+ 'product'+i+'.png'">
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
          title: "无线对耳",
          intro: ""
        },
        {
          title: "无线对箱",
          intro: ""
        },
        {
          title: "智能音箱",
          intro: ""
        },
        {
          title: "Lightening接口主动降噪耳机",
          intro: ""
        },
        {
          title: "蓝牙音箱",
          intro: ""
        },
        {
          title: "无线运动耳机",
          intro: ""
        },
        {
          title: "无线音频收发器",
          intro: ""
        },
        {
          title: "主动降噪Type-C耳机",
          intro: ""
        },
        {
          title: "手机标配数字耳机",
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
    .boxs-ul {
      margin: 0 auto;
      li {
        float: left;
        position: relative;
        margin: 12px;
        height: 318px;
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
