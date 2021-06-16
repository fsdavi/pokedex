<template>
  <div class="home">
    <pokedex-logo />
    <div class="container-trainer-selection">
      <button class="container-trainer bg-button-blue">
        <img src="../assets/brendan.svg" alt="Trainer" class="img-trainer" />
      </button>
      <button class="container-trainer bg-button-red">
        <img src="../assets/may.svg" alt="Trainer" class="img-trainer" />
      </button>
    </div>
    <div class="text-container">
      <h2>Choose your trainer!</h2>
      <span class="arrow" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PokedexLogo from '../components/Logo.vue';

@Component({
  components: {
    'pokedex-logo': PokedexLogo,
  },
})
export default class Home extends Vue {}
</script>

<style scoped src="../styles/views/home.css">
</style>
