<template>
  <div class="container">
    <NowPlayingList />
  </div>
</template>

<script>
import NowPlayingList from "@/components/NowPlayingList.vue";

export default {
  components: {
    NowPlayingList,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: 80px;

  @media screen and (max-width: 949px) {
    margin: 80px auto;
    // width: 100%;
  }
}
</style>