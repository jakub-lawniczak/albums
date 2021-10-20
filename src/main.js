import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toasted from "vue-toasted";
import VueSilentbox from "vue-silentbox";

Vue.config.productionTip = false;
Vue.use(Toasted);
Vue.use(VueSilentbox);

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch("getAlbums");
    this.$store.dispatch("getPhotos");
  },
  watch: {
    "$store.getters.favouritesCount"(newCount, oldCount) {
      if (newCount >= 5 && oldCount < 5) {
        this.$toasted.show(
          "Gratulujemy! Dodałeś dzisiaj już 5 albumów do ulubionych",
          {
            duration: 3000,
          }
        );
      }
    },
  },
}).$mount("#app");
