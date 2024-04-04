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
    mounted() {
      this.getApi("movie");
      this.getApi("tv");
    },
  },
};
</script>

<template>
  <Header />
  <Main type="movie" />
  <Main type="tv" />
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
