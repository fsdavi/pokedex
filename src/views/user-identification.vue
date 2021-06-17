<template>
  <div class="page">
    <pokedex-logo />
    <box-dialog :messageText="'Whats your name, trainer?'" />
    <div class="inputName-container">
      <input type="text" class="inputName" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import PokedexLogo from '../components/BaseLogo.vue';
import BoxDialog from '../components/BoxDialog.vue';

@Component({
  components: {
    'pokedex-logo': PokedexLogo,
    'box-dialog': BoxDialog,
  },
})
export default class UserIdentification extends Vue {}
</script>

<style scoped src="../styles/views/user-identification.css">
</style>
