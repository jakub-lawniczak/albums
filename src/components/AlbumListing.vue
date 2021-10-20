<template>
  <div class="albumListing">
    <ul class="albumListing__list">
      <li
        class="albumListing__listItem"
        v-for="album in albums"
        :key="album.id"
      >
        <div class="albumListing__content">
          <p class="albumListing__id">{{ album.id }}.</p>
          <router-link
            class="albumListing__link"
            :to="{ name: 'album', params: { id: album.id } }"
          >
            <p class="albumListing__title">{{ album.title }}</p></router-link
          >
        </div>
        <div class="albumListing__triggers">
          <!-- <router-link
            class="albumListing__link"
            :to="{ name: 'edit', params: { id: album.id } }"
          >
            <div class="albumListing__edit">edit</div>
          </router-link> -->
          <EditBtn :id="album.id" />
          <button
            @click="$store.commit('toggleFavourite', album.id)"
            class="albumListing__favorite"
          >
            <AlbumFavourite :favourite="!!$store.state.favourites[album.id]" />
          </button>
        </div>
      </li>
    </ul>
    <div class="albumListing__pagination">
      <button
        class="albumListing__btn albumListing__btn--prev"
        :disabled="ifFirstPage"
        @click="page--"
      >
        <img src="../assets/right-chevron.svg" alt="chevron" />
      </button>
      <p>Page {{ page + 1 }} of {{ numberOfPages }}</p>
      <button
        class="albumListing__btn albumListing__btn--next"
        :disabled="ifLastPage"
        @click="page++"
      >
        <img src="../assets/right-chevron.svg" alt="chevron" />
      </button>
    </div>
  </div>
</template>

<script>
import AlbumFavourite from "@/components/AlbumFavourite";
import EditBtn from "@/components/EditBtn";
export default {
  name: "ArtilceListing",
  components: {
    AlbumFavourite,
    EditBtn,
  },
  data() {
    return {
      page: 0,
      perPage: 10,
    };
  },
  methods: {
    prevPage() {
      if (this.page > 0) {
        this.page--;
      }
    },
  },
  computed: {
    albums() {
      return this.$store.state.albums.slice(
        this.page * this.perPage,
        (this.page + 1) * this.perPage
      );
    },
    ifFirstPage() {
      return this.page === 0;
    },
    numberOfPages() {
      return (
        Math.floor((this.$store.state.albums.length - 1) / this.perPage) + 1
      );
    },
    ifLastPage() {
      return this.page + 1 === this.numberOfPages;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.albumListing {
  margin-top: 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 50px;
  width: 100%;
  overflow-x: hidden;
  &__list {
    list-style: none;
    margin-bottom: 25px;
    @media (min-width: 1024px) {
      width: 100%;
    }
  }
  &__listItem {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 3px 25px;
    padding: 15px 10px;
    text-align: left;
    border-radius: 4px;
    background: #1abc9c;
    &:nth-child(even) {
      background: #3cdfbf;
    }
  }
  &__content,
  &__triggers {
    display: flex;
    align-items: center;
  }
  &__triggers {
    flex-direction: column-reverse;
    @media (min-2idth: 1025px) {
      flex-direction: row;
    }
  }
  &__id {
    margin-right: 2px;
  }
  &__link {
    color: #222;
    font-weight: 500;
    text-decoration: none;
  }
  &__title {
    max-width: 100%;
    word-break: break-word;
    &:first-letter {
      text-transform: capitalize;
    }
  }
  &__favorite {
    border: 0;
    background: transparent;
    width: 32px;
  }
  &__edit {
    font-size: 16px;
    font-weight: 300;
    color: #010101;
    text-decoration: none;
    width: 32px;
    text-align: center;
    margin-top: 8px;
    @media (min-width: 1024px) {
      font-size: 16px;
      margin-top: 0;
    }
  }
  &__pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background-color: #38c2a7;
    width: 40px;
    height: 40px;
    margin: 0 10px;
    &--prev {
      transform: rotateY(180deg);
    }
    &:disabled {
      background: #048063;
    }
    img {
      height: 20px;
    }
  }
}
</style>
