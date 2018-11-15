<template>
    <div id="header">
        <header class="tab-body">
            <div class="logo">
                <img src="../../static/images/hlwlogo.png">
            </div>
            <nav class="nav">
                <ul>
                    <li v-for="(item,index)  in tabs" @click="addClass(index)">
                        <a :href="item.value" :class="{ active:index==current}">{{item.title}}</a>
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
        { title: "首页", value: "#head" },
        { title: "产品中心", value: "#product" },
        { title: "新闻中心", value: "#news" },
        { title: "关于我们", value: "#abouts" }
      ],
      current: 0
    };
  },
  methods: {
    addClass: function(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
#header {
  background: #f2f2f2;
  width: 100%;
  height: 80px;
  line-height: 80px;
  position: fixed;
}
.tab-body {
  width: 1200px;
  margin: 0 auto;
  .logo {
    display: inline-block;
    height: 80px;
    line-height: 80px;
    width: 131px;
    margin-left: 70px;
    img {
      border: 0;
      vertical-align: middle;
    }
  }
  .nav {
    width: 40%;
    float: right;
    display: block;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    ul {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        font-size: 17px;
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
          background: #cc5a5a;
        }
        a.active {
          color: #fff;
          background: #cc5a5a;
        }
      }
    }
  }
}
</style>



