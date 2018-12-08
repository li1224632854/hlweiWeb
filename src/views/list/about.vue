<template>
  <div class="about-main">
    <article class="about">
      <!--海报-->
      <section class="banner container-fluid">
        <img src="../../../static/images/about-bg.jpg" style="width:100%;">
        <div class="title">
          <p class="p1">COMPANY</p>
          <p class="p2">把你的梦想带入生活</p>
        </div>
      </section>

      <!--列表介绍-->
      <section class="info-list">
        <div class="container-fluid">
          <div class="item  bx">
            <div class="font">
              <div>
                <div class="title">我们是一家专注于无线音频的研发和销售的高科技企业 </div>
                <p class="tips-p">公司崇尚简单的研发文化，工程师拥有丰富的产品开发经验和雄厚的技术实力。 </p>
                <p class="tips-p">为客户提供具备BT无线连接的音频系统级芯片，软硬件开发套件以及完备的参考设计方案，以帮助客户快速推出业界领先的无线音频产品。</p>
              </div>
            </div>
            <div class="img">
              <img src="../../../static/images/about-list1.png" alt="">
            </div>
          </div>
        </div>
        <div class="container-fluid" style="background:#fff;">
          <div class="item  bx">
            <div class="img">
              <img src="../../../static/images/about-list2.png" alt="">
            </div>
            <div class="font">
              <div>
                <div class="title">公司主要业务板块 </div>
                <p class="tips-p">BT无线连接的音频系统级芯片。 </p>
                <p class="tips-p"> 软硬件开发套件以及完备的参考设计方案。</p>
                <p class="tips-p"> 无线音频的研发和销售。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="item  bx">
            <div class="font">
              <div>
                <div class="title">公司经营理念 </div>
                <p class="tips-p"> 公司成立于2012年6月28日， 拥有着一支多达30人以上的硬件，软件技术团队,专注于无线音频领域的研发与创新。 </p>
                <p class="tips-p">目前公司已打造出多个成功的合作案例，在各行业拥有了广泛的客户基础，赢得了良好的市场口碑！</p>
                <p class="tips-p"> 公司致力于技术上的突破创新，立志成为领先的无线音频产品及解决方案提供商，满足不断增长和变化的市场需求，愿意与广大海内外客户精诚合作，共创灿烂的明天！</p>
              </div>
            </div>
            <div class="img">
              <img src="../../../static/images/about-list3.png" alt="">
            </div>
          </div>
        </div>
      </section>

      <!--办公环境-->
      <section class="office">
        <div class="title">办公环境</div>
        <div class="photo"><img src="../../../static/images/office.png" style="width:100%;"></div>
      </section>

      <!-- 合作伙伴 -->
      <section class="office">
        <div class="title">合作伙伴</div>
        <div class="partner"></div>
        <div class="partner-list">
          <ul v-for="v,i in 9">
            <li>
              <a href="#">
                <img src="" class="partner-img" :src="'../../../static/images/partner' + i + '.png'">
              </a>
            </li>
          </ul>
        </div>
      </section>

    </article>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      activeIndex: 0,
      invite: {
        first_card: {
          sketch: [],
          particulars: []
        }
      }
    };
  }
};
</script>

<style scoped lang="less">
.about {
  padding-top: 80px;
}
.about-main {
  width: 1300px;
  margin: 0 auto;
}
.tips-p {
  padding: 5px 0;
  font-size: 16px;
}
.about {
  max-width: 1920px;
  margin: 0 auto;
  .orange {
    color: #ff9d01;
  }
  // 海报
  .banner {
    padding: 0;
    position: relative;
    background-color: #2b292a;
    img {
      display: block;
      margin: 0 auto;
      max-width: 1920px;
    }
    .title {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 38px;
      .p2 {
        font-size: 24px;
      }
      @media screen and (max-width: 767px) {
        font-size: 4vw;
        .p2 {
          font-size: 3vw;
        }
      }
    }
  }
  // 详情列表
  .info-list {
    & > .container-fluid {
      background-color: #f6f6f6;
    }
    .item {
      display: flex;
      -webkit-display: flex;
      -moz-display: flex;
      -o-display: flex;
      box-sizing: border-box;
      min-height: 600px;
      align-items: center;
      .font {
        height: 100%;
        padding: 25px;
        color: #6d6d6d;
        .title {
          font-size: 20px;
          padding-bottom: 22px;
          color: #474747;
          font-weight: 700;
          &:after {
            display: block;
            content: "";
            height: 3px;
            width: 70px;
            background-color: #003c56;
            margin-top: 12px;
          }
        }
      }
      .img {
        padding: 5%;
        padding-left: 0;
      }
      & > div {
        flex: 1;
      }
      // 适配ipad
      @media screen and (min-width: 500px) and (max-width: 992px) {
        min-height: 300px;
      }
      // 适配手机
      @media screen and (max-width: 500px) {
        min-height: 400px;
        flex-wrap: wrap;
        & > div {
          flex-basis: 100%;
          width: 100%;
        }
        .img {
          padding: 0 12% 5%;
        }
        .font {
          padding: 5%;
          font-size: 12px;
          .title {
            font-size: 17px;
          }
        }
      }
    }
  }
  // 办公环境
  .office {
    .title {
      margin: 0 auto;
      text-align: center;
      max-width: 414px;
      font-size: 20px;
      font-weight: 700;
      height: 110px;
      line-height: 110px;
      // padding-bottom:22px;
      color: #474747;
      &:after {
        margin: 0 auto;
        display: block;
        content: "";
        height: 3px;
        width: 70px;
        background-color: #003c56;
        margin-top: -28px;
      }
    }
    .photo {
      margin-bottom: 20px;
    }
  }

  .partner {
    color: #006cb7;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
    padding-bottom: 10px;
    border-bottom: 2px solid #474747;
    // margin-bottom: 20px;
  }
  .partner-list {
    padding: 20px 0;
    text-align: center;
    ul {
      display: inline-block;
      li {
        margin: 15px;
        .partner-img {
          height: 100px;
          width: 300px;
        }
      }
    }
  }
}
</style>
