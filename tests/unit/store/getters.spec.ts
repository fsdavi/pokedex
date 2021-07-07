import getters from '@/store/getters';

const { trainer, userName, starter } = getters;

const state = {
  trainer: 'Brendan',
  name: 'Davi',
  starter: 'Charmander',
  favorites: []
};

describe('GETTERS', () => {
  it('should return trainer from the store state', () => {
    const getterResult = trainer(state);

    expect(getterResult).toBe(state.trainer);
  });

  it('should return name from the store state', () => {
    const getterResult = userName(state);

    expect(getterResult).toBe(state.name);
  });
  it('should return starter from the store state', () => {
    const getterResult = starter(state);

    expect(getterResult).toBe(state.starter);
  });
});
