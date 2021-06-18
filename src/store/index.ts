import Vue from 'vue';
import Vuex from 'vuex';
import { StateStore } from './types';

Vue.use(Vuex);

export default new Vuex.Store<StateStore>({
  state: {
    user: {
      trainer: 'brendan',
      name: '',
      starter: '',
    },
  },
  mutations: {
    changeTrainer: (state, trainer) => {
      state.user.trainer = trainer;
    },
    changeUserName: (state, userName) => {
      state.user.name = userName;
    },
    changeStarter: (state, starter) => {
      state.user.starter = starter;
    },
  },
  getters: {
    trainer: (state) => state.user.trainer,
    userName: (state) => state.user.name,
    starter: (state) => state.user.starter,
  },
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
