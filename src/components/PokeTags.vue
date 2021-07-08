<template>
  <ul class="tags">
    <li v-for="data of dataTypes" :key="data.slot" class="poke-tag">
       <img :src="getImgUrl(data.type.name)" alt="Type" class="img-type" />
       <p class="p-type">{{ data.type.name }}</p>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    dataTypes: [],
  },
  methods: {
    getImgUrl(type) {
      const images = require.context('../assets/pokeTypes', false, /\.svg$/);
      return images(`./${type}.svg`);
    },
  },
})
export default class PokeTags extends Vue {}
</script>

<style scoped src="../styles/components/PokeTag.css">
</style>
