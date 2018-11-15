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
  background: #f8f8f8;
}
ol,
ul {
  list-style: none;
}
</style>