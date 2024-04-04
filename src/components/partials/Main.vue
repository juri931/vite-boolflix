<script>
import { store } from "../data/store";
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  props: {
    type: String,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    title() {
      return this.type === "movie" ? "Film" : "Serie TV";
    },
  },
};
</script>

<template>
  <div class="container text-center my-5">
    <h3>{{ title }}</h3>
    <div class="row row-cols-5">
      <Card
        v-for="item in store[type]"
        :key="item.id"
        :title="item.title"
        :original_title="item.original_title"
        :language="item.original_language"
        :image="item.image"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
