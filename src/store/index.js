import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    albums: [],
    photos: [],
    favourites: {},
  },
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums;
    },
    setPhotos(state, photos) {
      state.photos = photos;
    },
    setTitle(state, { id, title }) {
      const album = state.albums.find((album) => album.id === id);
      if (album) {
        album.title = title;
      }
    },
    toggleFavourite(state, albumId) {
      if (state.favourites[albumId]) {
        Vue.delete(state.favourites, albumId);
      } else {
        Vue.set(state.favourites, albumId, new Date());
      }
    },
  },
  actions: {
    getAlbums({ commit }) {
      return axios
        .get("https://jsonplaceholder.typicode.com/albums/")
        .then((response) => commit("setAlbums", response.data));
    },
    getPhotos({ commit }) {
      return axios
        .get("https://jsonplaceholder.typicode.com/photos/")
        .then((response) => commit("setPhotos", response.data));
    },
    async save({ state, commit }, { id, title }) {
      // await axios.post(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      //   title,
      // });

      commit("setTitle", { id, title });
    },
  },
  getters: {
    favouritesCount(state) {
      return Object.keys(state.favourites).length;
    },
  },
  modules: {},
});
