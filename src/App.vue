<template>
  <div id="app">
    <TopBar />
    <div class="container">
      <TheNavigation />
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
import TopBar from "@/components/TopBar";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TopBar,
    TheFooter,
    TheNavigation,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: oxygen;
  src: url("./assets/fonts/oxigen/Oxygen-Regular.ttf");
}
html {
  background-color: #222b31;
}

#app {
  font-family: oxygen, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  min-width: 320px;
  max-width: 1920px;
  margin: auto;

  .container {
    display: flex;
    width: 100%;
  }
}
</style>
