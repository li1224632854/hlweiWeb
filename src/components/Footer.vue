<template>
  <div class="v-footer">
    <footer class="footer-top">
      <div class="footer-body">
        <p class="foot-title">了解海凌威</p>
        <p class="foot-content">
          深圳市海凌威电子有限公司是一家专注于无线音频的研发和销售的高科技企业，为客户提供具备BT无线连接的音频系统级芯片，软硬件开发套件以及完备的参考设计方案，以帮助客户快速推出业界领先的无线音频产品。 公司成立于2012年6月28日， 拥有着一支多达30人以上的硬件，软件技术团队,专注于无线音频领域的研发与创新。公司崇尚简单的研发文化，工程师拥有丰富的产品开发经验和雄厚的技术实力。目前公司已打造出多个成功的合作案例，在各行业拥有了广泛的客户基础，赢得了良好的市场口碑。 公司致力于技术上的突破创新，立志成为领先的无线音频。
        </p>
        <p class="icon-p">
          <img src="../../static/images/gs.png">
          <span>深圳市海凌威电子有限公司</span>
        </p>
        <p class="icon-p">
          <img src="../../static/images/wz.png">
          <span>深圳市宝安区智汇创新中心D座308-310</span>
        </p>
        <div class="footer-right">
          <p class="icon-p right">
            <img src="../../static/images/user.png">
            <span>袁峰</span>
          </p>
          <p class="icon-p right">
            <img src="../../static/images/phone.png">
            <span>13760305443</span>
          </p>
          <p class="icon-p right">
            <img src="../../static/images/email.png">
            <span>yuanfeng@hlwei.com</span>
          </p>
        </div>
        <div class="copyright">
          CopyRight 2018 All Right Reserved 版权所有者
        </div>
      </div>
      <!-- <div class="copyright">
        CopyRight 2018 All Right Reserved 版权所有者
      </div> -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "v-footer",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.v-footer {
  background: #ccc;
  .footer-top {
    // padding: 70px 0 80px;
    height: 548px;
    background: url(../../static/images/foot-bg.png) no-repeat center center;
    background-size: cover;
    text-align: center;
    // position: relative;
    // .copyright {
    //   position: absolute;
    //   bottom: 5px;
    //   left: 50%;
    //   margin-left: -180px;
    //   color: #fff;
    //   font-size: 12px;
    // }
    .footer-body {
      width: 693px;
      margin: 0 auto;
      text-align: left;
      color: #fff;
      .foot-title {
        font-size: 18px;
        padding-top: 30px;
        padding-bottom: 36px;
        font-weight: 700;
      }
      .foot-content {
        line-height: 35px;
        font-size: 14px;
      }
      .icon-p {
        margin-top: 25px;
        img {
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
          font-size: 12px;
          padding-left: 10px;
        }
      }
      .footer-right {
        margin-top: -94px;
        float: right;
        .right {
          text-align: left;
        }
      }
      .copyright {
        margin-top: 85px;
        text-align: center;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>
