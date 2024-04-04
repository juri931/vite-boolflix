<script>
import { store } from "../data/store";
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
      title: "",
      searchName: "",
      currentPage: 1,
    };
  },
  methods: {
    getApi() {
      axios
        .get(this.store.apiUrl, {
          params: {
            title: "",
            original_title: "",
            original_language: "",
            vote_average: 0,
          },
        })
        .then((result) => {
          store.movieList = result.results;
        })
        .catch((error) => {
          alert("Errore", error);
        });
    },
  },
  computed: {
    filteredCards() {
      return this.store.cardsList.filter((card) =>
        card.title.toLowerCase().includes(this.searchName.toLowerCase())
      );
    },
  },
};
</script>

<template>
  <div class="container text-center my-5">
    <div class="row row-cols-5">
      <Card
        v-for="item in store[type]"
        :key="item.id"
        :title="item.title"
        :original_title="item.original_title"
        :language="item.original_title"
        :image="item.image"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
