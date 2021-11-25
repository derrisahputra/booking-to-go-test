<template>
  <div class="navigation">
    <img class="logo" :src="require('@/assets/images/logo.png')" alt="Logo" />
    <input
      type="text"
      class="search-bar"
      placeholder="Search Title / Theatre Here"
    />
    <div class="wrapper-logo-icon">
      <img
        class="logo-icon"
        :src="require('@/assets/images/imax.png')"
        alt="IMAX"
      />
      <img
        class="logo-icon logo-dolby"
        :src="require('@/assets/images/dolby.png')"
        alt="Dolby"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Top-Bar-Component",
};
</script>

<style lang="scss" scoped>
.navigation {
  padding: 20px 40px;
  background-color: #c0222e;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;

  .wrapper-logo-icon {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;

    img.logo,
    img.logo-icon {
      height: 40px;
    }
    img.logo-dolby {
      height: 20px !important;
    }
    img.logo-icon {
      margin-right: 34px;

      @media screen and (max-width: 958px) {
        display: none;
      }
    }
  }

  input.search-bar {
    padding: 15px 23px;
    width: 500px;
    border-radius: 20px;
    border: 0;
    color: black;
    margin-left: 142px;

    @media screen and (max-width: 425px) {
      display: none;
    }
    @media screen and (min-width: 426px) and (max-width: 768px) {
      width: 200px;
      margin-left: 0;
      position: absolute;
      right: 40px;
    }
  }
}
</style>