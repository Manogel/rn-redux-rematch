import { DispatchStore } from '../../store';

export const authEffects = (dispatch: any) => {
  const { auth } = dispatch as DispatchStore;
  return {
    async getUsers() {
      auth.SET_AUTH({
        token: 'aaaaa',
        user: {
          name: 'Manoel',
        },
      });
    },
  };
};
