import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import { StoreState } from './types';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'pokedex',
});

export default new Vuex.Store<StoreState>({
  state: {
    trainer: '',
    name: '',
    starter: '',
    favorites: [],
  },
  plugins: [vuexLocal.plugin],
  mutations,
  getters,
  actions: {
    selectTrainer({ commit }, trainer) {
      commit('changeTrainer', trainer);
    },
    setUserName({ commit }, name) {
      commit('changeUserName', name);
    },
    selectStarter({ commit }, starter) {
      commit('changeStarter', starter);
    },
  },
});
