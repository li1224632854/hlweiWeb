<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body{
  background: #F2F2F2;
}
ol,
ul {
  list-style: none;
}
a{
  text-decoration-line: none;
}
</style>