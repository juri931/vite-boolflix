<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <nav>
    <h1>BOOLFLIX</h1>
    <div class="bar">
      <input
        v-model="searchName"
        type="text"
        class="form-control"
        placeholder="Cerca"
      />
      <button class="btn btn-danger">Cerca</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/header";
</style>
