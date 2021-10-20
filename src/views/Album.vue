<template>
  <div class="album">
    <div class="album__topBar">
      <router-link to="../" class="album__backBtn">
        <img src="../assets/right-chevron.svg" alt="back" />
        <span class="text">back</span>
      </router-link>
      <button
        @click="$store.commit('toggleFavourite', albumId)"
        class="album__favorite"
      >
        <AlbumFavourite :favourite="!!$store.state.favourites[albumId]" />
      </button>
    </div>
    <h2 class="album__title">{{ albumTitle }}</h2>
    <ul class="album__photoList">
      <li class="album__photo" v-for="photo in albumPhotos" :key="photo.id">
        <img :src="photo.url" :alt="photo.title" />
      </li>
    </ul>
    <EditBtn :id="albumId" />
  </div>
</template>
<script>
import AlbumFavourite from "@/components/AlbumFavourite";
import EditBtn from "@/components/EditBtn";
export default {
  components: {
    AlbumFavourite,
    EditBtn,
  },
  data() {
    return {
      photos: [],
    };
  },
  computed: {
    albumId() {
      return Number(this.$route.params.id);
    },
    albumPhotos() {
      return this.$store.state.photos
        .filter((photo) => photo.albumId === this.albumId)
        .slice(0, 10);
    },
    albumTitle() {
      return this.$store.state.albums.find((album) => album.id === this.albumId)
        .title;
    },
  },
};
</script>
<style lang="scss" scoped>
.album {
  padding: 20px 25px;
  overflow-x: hidden;
  &__topBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__backBtn {
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      width: 8px;
      transform: rotateY(180deg);
    }
    .text {
      font-size: 12px;
      font-weight: 300;
      margin-left: 4px;
    }
  }
  &__title {
    font-size: 24px;
    margin: 25px 0;
    max-width: 100%;
    word-break: break-word; //if someone tries to write too long words
  }
  &__favorite {
    background-color: transparent;
    border: 0;
    width: 40px;
    height: 40px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &__photoList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    @media (min-width: 1024px) {
      justify-content: flex-start;
    }
  }
  &__photo {
    width: calc(50% - 2px);
    height: auto;

    @media (min-width: 1024px) {
      width: 300px;
      height: 300px;
      margin-right: 5px;
      margin-bottom: 5px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
