<template>
  <div class="profile-container">
    <!-- Alredy tryed dinamyc source image -->
    <div class="trainer-image">
      <img
        src="../assets/brendan.svg"
        alt="Brendan"
        v-if="trainer === 'Brendan'"
      />
      <img src="../assets/may.svg" alt="May" v-else />
    </div>
    <div class="container-profile-data">
      <p>Name: {{ userName }}</p>
      <p>Trainer: {{ trainer }}</p>
      <p>Starter: {{ starter }}</p>
    </div>
    <div class="starter-image">
      <img
        src="../assets/charmander.png"
        alt="Brendan"
        v-if="starter === 'Charmander'"
        class="starter-image"
      />
      <img
        src="../assets/squirtle.png"
        alt="Squirtle"
        v-else-if="starter === 'Squirtle'"
        class="starter-image"
      />
      <img
        src="../assets/bulbasaur.png"
        alt="Bulbasaur"
        v-else
        class="starter-image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters(['trainer', 'starter', 'userName']),
  },
})
export default class BaseProfile extends Vue {}
</script>

<style scoped src="../styles/components/BaseProfile.css">
</style>
