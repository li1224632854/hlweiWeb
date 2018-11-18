<template>
  <div id="header">
    <header class="tab-body">
      <div class="logo">
        <img src="../../static/images/logo.png">
      </div>
      <nav class="nav">
        <ul>
          <li v-for="(item,index)  in tabs" @click="addClass(index)">
            <a :href="item.value" :class="{ active:item.value==path}">{{item.title}}</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "首页", value: "/index" },
        { title: "产品中心", value: "/product" },
        { title: "新闻中心", value: "/news" },
        { title: "关于我们", value: "/about" }
      ],
      current: 0,
      path: this.$route.path
    };
  },
  props: {
    currentIndex: Number,
    default: 0
  },
  methods: {
    addClass: function(index) {
      // this.current = index;
    },
  }
};
</script>

<style lang="less" scoped>
#header {
  background: #fff;
  width: 100%;
  height: 80px;
  line-height: 80px;
  position: fixed;
  z-index: 999;
}
.tab-body {
  width: 1200px;
  margin: 0 auto;
  .logo {
    display: inline-block;
    height: 80px;
    line-height: 80px;
    width: 131px;
    // margin-left: 30px;
    img {
      border: 0;
      vertical-align: middle;
    }
  }
  .nav {
    width: 42%;
    float: right;
    display: block;
    // padding-left: 20px;
    margin-bottom: 0;
    list-style: none;
    ul {
      margin-left: 50px;
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        font-size: 16px;
        flex: 1;
        text-align: center;
        border-radius: 5px;
        a {
          display: block;
          color: #000;
          width: 80%;
          height: 38px;
          line-height: 38px;
          border-radius: 5px;
          text-decoration: none;
        }
        a:hover {
          color: #fff;
          background: #003c56;
        }
        a.active {
          color: #fff;
          background: #003c56;
        }
      }
    }
  }
}
</style>



