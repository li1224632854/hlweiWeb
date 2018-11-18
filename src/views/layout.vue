
<template>
  <div class="layout">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "layout",
  components: {
    Header: Header,
    Footer: Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
footer {
  margin-top: 20px;
}
</style>
