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
      searchName: "",
      currentPage: 1,
      pageSize: 9,
    };
  },
  computed: {
    filteredCards() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.store.cardsList
        .slice(start, start + this.pageSize)
        .filter((card) =>
          card.title.toLowerCase().includes(this.searchName.toLowerCase())
        );
    },
  },
};
</script>

<template>
  <div class="container text-center my-5">
    <div class="row row-cols-3">
      <Card
        v-for="card in filteredCards"
        :key="card.id"
        :title="card.title"
        :original_title="card.original_title"
        :language="card.original_title"
        :image="card.image"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
