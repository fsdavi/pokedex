<template>
  <div class="page">
    <pokedex-logo />
    <box-dialog :messageText="'Whats your name, trainer?'" />
    <div class="container">
      <img
        src="../assets/brendan.svg"
        alt="Brendan"
        v-if="trainer === 'Brendan'"
        class="trainer-image"
      />
      <img src="../assets/may.svg" alt="May" v-else class="trainer-image" />
      <form class="form-container" @submit="handleClickGo">
        <input
          class="inputName"
          type="text"
          placeholder="Name here!"
          @input="name = $event.target.value"
        />
        <h2>Choose your starter</h2>
        <div class="starters-container">
          <button
            type="button"
            @click="selectStarter('Charmander')"
            :class="starter === 'Charmander' ? 'selected' : ''"
          >
            <img src="../assets/charmander.png" alt="Charmander" />
          </button>
          <button
            type="button"
            @click="selectStarter('Squirtle')"
            :class="starter === 'Squirtle' ? 'selected' : ''"
          >
            <img src="../assets/squirtle.png" alt="Squirtle" />
          </button>
          <button
            type="button"
            @click="selectStarter('Bulbasaur')"
            :class="starter === 'Bulbasaur' ? 'selected' : ''"
          >
            <img src="../assets/bulbasaur.png" alt="Bulbasaur" />
          </button>
        </div>
        <button type="submit" class="button-go">Go!</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions, mapGetters } from 'vuex';
import PokedexLogo from '../components/BaseLogo.vue';
import BoxDialog from '../components/BoxDialog.vue';

@Component({
  components: {
    'pokedex-logo': PokedexLogo,
    'box-dialog': BoxDialog,
  },
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapGetters(['trainer', 'starter', 'userName']),
  },
  methods: {
    ...mapActions(['selectStarter', 'setUserName']),
  },
})
export default class UserIdentification extends Vue {
  public selectStarter!: (starter: string) => void;

  public setUserName!: (name: string) => void;

  handleClickStarter(starter: string): void {
    this.selectStarter(starter);
  }

  handleChangeInput(name: string): void {
    this.setUserName(name);
  }

  handleClickGo(): void {
    this.handleChangeInput(this.$data.name);
    this.$router.push({ name: 'Dashboard' });
  }
}
</script>

<style scoped src="../styles/views/user-identification.css">
</style>
