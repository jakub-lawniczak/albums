<template>
  <div class="home">
    <h2 class="home__title">Album listing</h2>
    <AlbumListing />
  </div>
</template>

<script>
// @ is an alias to /src

import AlbumListing from "@/components/AlbumListing.vue";

export default {
  name: "Home",
  components: {
    AlbumListing,
  },
};
</script>
<style scoped lang="scss">
.home {
  min-height: 100vh;
  padding: 25px;
  @media (min-width: 787px) {
    padding: 50px;
  }
}
</style>
