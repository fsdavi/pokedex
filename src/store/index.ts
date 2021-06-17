import Vue from 'vue';
import Vuex from 'vuex';
import { StateStore } from './types';

Vue.use(Vuex);

export default new Vuex.Store<StateStore>({
  state: {
    user: {
      trainer: '',
      name: '',
    },
  },
  mutations: {
    changeTrainer: (state, trainer) => {
      state.user.trainer = trainer;
    },
  },
  getters: {
    trainer: (state) => state.user.trainer,
    userName: (state) => state.user.name,
  },
  actions: {
    selectTrainer({ commit }, trainer) {
      commit('changeTrainer', trainer);
    },
  },
});
