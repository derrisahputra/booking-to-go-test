<template>
  <div class="wrapper">
    <router-link :to="{ name: 'NowPlaying' }" style="margin-top: 15px"
      >Now Playing</router-link
    >
    <router-link to="">Coming Soon</router-link>
    <router-link to="">Theatre</router-link>
    <router-link to="">Promotions</router-link>
    <router-link to="">Information</router-link>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #191c1f;
  width: 20% !important;
  margin-top: 85px;
  height: 100vh;
  box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.15);

  a {
    display: block;
    text-decoration: none;
    font-size: 16px;
    color: white;
    padding: 20px 40px;

    &:hover {
      background-color: #232c32;
    }

    &:active {
      background-color: #151c20;
    }
  }
  @media screen and (max-width: 949px) {
    display: none;
  }
}
</style>