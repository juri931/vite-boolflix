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
    getApi() {
      axios
        .get(this.store.apiUrlMovie, {
          params: {
            title: "",
            original_title: "",
            original_language: "",
            vote_average: 0,
          },
        })
        .then((result) => {
          store.cardsList = result.results;
        })
        .catch((error) => {
          alert("Errore", error);
        });
    },
  },
  mounted() {
    this.getApi();
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
