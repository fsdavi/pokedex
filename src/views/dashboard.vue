<template>
  <div class="page">
    <base-profile />
    <input
      type="search"
      placeholder="Search pokemon"
      v-model="filter"
      @input="filterPokemons"
      class="input-filter"
    />
    <ul class="pokemon-list">
      <li class="pokemon-item" v-for="pokemon of filteredPokemons" :key="pokemon.url">
        <poke-card :pokemonURL="pokemon.url"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import PokeCard from '../components/PokeCard.vue';
import BaseProfile from '../components/BaseProfile.vue';

@Component({
  components: {
    'poke-card': PokeCard,
    'base-profile': BaseProfile,
  },
  data() {
    return {
      filter: '',
      pokemons: [],
      filteredPokemons: [],
    };
  },
})
export default class Dashboard extends Vue {
  // eslint-disable-next-line
  async created(): Promise<void> {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const json = await data.json();
    this.$data.pokemons = json.results;
    this.$data.filteredPokemons = json.results;
  }

  filterPokemons(): void {
    if (this.$data.filter !== '') {
      const exp = new RegExp(this.$data.filter.trim(), 'i');
      // eslint-disable-next-line
      this.$data.filteredPokemons = this.$data.pokemons.filter((pokemon: any) => exp.test(pokemon.name));
    } else {
      this.$data.filteredPokemons = this.$data.pokemons;
    }
  }
}
</script>

<style scoped src="../styles/views/dashboard.css">
</style>
