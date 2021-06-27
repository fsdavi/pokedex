import { StoreState } from './types';

const mutations = {
  changeTrainer: (state: StoreState, trainer: string): void => {
    state.trainer = trainer;
  },
  changeUserName: (state: StoreState, userName: string): void => {
    state.name = userName;
  },
  changeStarter: (state: StoreState, starter: string): void => {
    state.starter = starter;
  },
};

export default mutations;
