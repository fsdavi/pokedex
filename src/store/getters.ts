import { StoreState } from './types';

const getters = {
  trainer: (state: StoreState): string => state.trainer,
  userName: (state: StoreState): string => state.name,
  starter: (state: StoreState): string => state.starter,
};

export default getters;
