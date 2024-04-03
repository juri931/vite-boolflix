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
    return {};
  },
  methods: {
    getApi() {
      axios.get(this.store.apiUrlMovie, {
        params: {
          title: "",
          original_title: "",
          original_language: "",
          vote_average: 0,
        },
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
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
