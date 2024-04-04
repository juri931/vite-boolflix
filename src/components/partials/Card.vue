<script>
export default {
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
  },
};
</script>

<template>
  <div class="col mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-title">Titolo originale: {{ original_title }}</h6>
        <h6 class="card-subtitle">Lingua originale: {{ original_language }}</h6>
        <p class="text-center">Voto: {{ vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../../assets/scss/card";
</style>
