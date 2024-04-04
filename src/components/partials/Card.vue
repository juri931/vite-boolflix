<script>
import { fileImage, image, language } from "fontawesome";

export default {
  props: {
    title: String,
    original_title: String,
    language: String,
    vote_average: Number,
    poster_path: String,
  },
};
</script>

<template>
  <div class="col-3 mb-3">
    <div class="card">
      <img class="card-img-top" :src="poster_path" :alt="title" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-title">Titolo originale: {{ original_title }}</h6>
        <h6 class="card-subtitle">Lingua originale: {{ language }}</h6>
        <p class="text-center">Voto: {{ vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../../assets/scss/card";
</style>
