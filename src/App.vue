<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
// By Vuex
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
