import Vue from 'vue';
import Vuex from 'vuex';
import { StoreState } from './types';

import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store<StoreState>({
  state: {
    trainer: '',
    name: '',
    starter: '',
  },
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
