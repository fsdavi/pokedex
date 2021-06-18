<template>
  <div class="page">
    <pokedex-logo />
    <div class="container-trainer-selection">
      <button
        class="container-trainer bg-button-blue"
        @click="handleClickTrainer('Brendan')"
        :class="trainer === 'Brendan' ? 'selected-trainer' : ''"
      >
        <img
          src="../assets/full-brendan.svg"
          alt="Trainer"
          class="imgBrendan-trainer"
        />
      </button>
      <button
        class="container-trainer bg-button-red"
        @click="handleClickTrainer('May')"
        :class="trainer === 'May' ? 'selected-trainer' : ''"
      >
        <img
          src="../assets/full-may.svg"
          alt="Trainer"
          class="imgMay-trainer"
        />
      </button>
    </div>
    <box-dialog :messageText="'Choose your trainer!'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters, mapActions } from 'vuex';

import PokedexLogo from '../components/BaseLogo.vue';
import BoxDialog from '../components/BoxDialog.vue';

@Component({
  components: {
    'pokedex-logo': PokedexLogo,
    'box-dialog': BoxDialog,
  },
  computed: {
    ...mapGetters({ trainer: 'trainer' }),
  },
  methods: {
    ...mapActions({ selectTrainer: 'selectTrainer' }),
  },
})
export default class TrainerSelection extends Vue {
  public selectTrainer!: (trainer: string) => void;

  handleClickTrainer(trainer: string): void {
    this.selectTrainer(trainer);

    setTimeout(() => {
      this.$router.push({ name: 'Identification' });
    }, 2000);
  }
}
</script>

<style scoped src="../styles/views/trainer-selection.css">
</style>
