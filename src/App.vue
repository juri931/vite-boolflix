<script>
import axios from "axios";
import { store } from "./components/data/store";
import Header from "./components/partials/Header.vue";
import Main from "./components/partials/Main.vue";
export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi(type) {
      axios
        .get(store.apiUrl + type, {
          params: store.apiParams,
        })
        .then((res) => {
          store[type] = res.data.results;
        });
    },
    getMovies() {
      axios
        .get(store.apiUrl + "movie", {
          params: store.apiParams,
        })
        .then((res) => {
          store.movieList = res.data.results;
        });
    },
    getSeries() {
      axios
        .get(store.apiUrl + "tv", {
          params: store.apiParams,
        })
        .then((res) => {
          store.seriesList = res.data.results;
        });
    },
  },
  mounted() {
    this.getApi("movie");
    this.getApi("tv");
  },
};
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
