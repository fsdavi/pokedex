import mutations from '@/store/mutations';

const { changeStarter, changeTrainer, changeUserName } = mutations;

const state = {
  name: '',
  trainer: '',
  starter: ''
}

describe('MUTATIONS', () => {
  it('should change the Starter', () => {
    changeStarter(state, 'bulbasaur');

    expect(state.starter).toBe('bulbasaur');
  });

  it('should change username', () => {
    changeUserName(state, 'Davi');

    expect(state.name).toBe('Davi');
  });

  it('should change starter', () => {
    changeUserName(state, 'bulbasaur');

    expect(state.name).toBe('bulbasaur');
  });
});
