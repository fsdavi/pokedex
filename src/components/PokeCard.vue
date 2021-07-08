<template>
  <div class="pokemon-container">
    <p v-if="!loading">{{ pokemonNameFormated }}</p>
    <img
      :src="pokemon.sprites.front_default"
      :alt="pokemonNameFormated"
      v-if="!loading"
    />
    <img src="../assets/pokeball.svg" alt="Loading..." class="loading" v-else />

    <poke-tags :dataTypes="pokemon.types"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import PokeTags from './PokeTags.vue';

@Component({
  components: {
    'poke-tags': PokeTags,
  },
  props: {
    pokemonURL: {
      type: String,
    },
  },
  data() {
    return {
      pokemon: {},
      pokemonNameFormated: '',
      loading: true,
    };
  },
})
export default class PokeCard extends Vue {
  async created(): Promise<void> {
    if (this.$props.pokemonURL) {
      this.$data.pokemon = await this.getSpecificPokemon(this.$props.pokemonURL);
    }
    this.formatPokemonName();
    this.$data.loading = false;
  }

  // eslint-disable-next-line
  getSpecificPokemon = async (pokemonURL: string): Promise<any> => {
    const data = await fetch(pokemonURL);
    const json = await data.json();
    return json;
  };

  formatPokemonName(): void {
    const stringToFormat = this.$data.pokemon.name;
    const firstLetter = stringToFormat.charAt(0);
    this.$data.pokemonNameFormated = firstLetter.toUpperCase() + stringToFormat.slice(1);
  }
}
</script>

<style scoped src="../styles/components/PokeCard.css">
</style>
