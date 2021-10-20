<template>
  <div class="edit">
    <BackBtn />
    <form
      class="edit__form"
      action=""
      @submit.prevent="save({ id: albumId, title: albumTitle })"
    >
      <div class="edit__formBox">
        <label class="edit__label" for="id">id:</label>
        <input
          class="edit__input"
          type="text"
          name="id"
          id="id"
          :value="albumId"
          disabled
        />
      </div>
      <div class="edit__formBox">
        <p class="edit__currentTitle">
          Current title:
          <span class="title"> {{ this.album.title }}</span>
        </p>
      </div>

      <div class="edit__formBox">
        <label class="edit__label" for="title">New title:</label>
        <input
          class="edit__input"
          type="text"
          name="title"
          id="title"
          v-model="albumTitle"
        />
        <div v-if="!valid">error</div>
      </div>
      <button class="edit__btn" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import BackBtn from "@/components/BackBtn";
export default {
  components: {
    BackBtn,
  },
  data() {
    return {
      albumTitle: "",
    };
  },
  computed: {
    albumId() {
      return Number(this.$route.params.id);
    },
    album() {
      return this.$store.state.albums.find(
        (album) => album.id === this.albumId
      );
    },
    valid() {
      return /^[a-zA-Z ]+$/.test(this.albumTitle);
    },
  },
  watch: {
    album: {
      immediate: true,
      handler(album) {
        this.albumTitle = album?.title;
      },
    },
  },
  methods: {
    ...mapActions(["save"]),
  },
  created() {
    someTitle: {
      let someTitle = this.albumTitle;
      return someTitle;
    }
  },
};
</script>
<style lang="scss">
.edit {
  padding: 25px;
  &__formBox {
    margin-top: 25px;
  }
  &__label {
    font-size: 20px;
  }
  &__input {
    height: 30px;
    font-size: 16px;
  }
  &__btn {
    margin-top: 25px;
    width: 100%;
    padding: 8px 16px;
    background: #ccc;
    border: 0;
    border-radius: 5px;
    @media (min-width: 1025px) {
      width: auto;
    }
  }
  &__currentTitle {
    font-size: 20px;
    .title {
      font-weight: 700;
    }
  }
  &__btn {
    cursor: pointer;
  }
}
</style>
