import { DispatchStore } from '../../store';
import FetchService from '../../../services/FetchService';
import { UserModel } from './types';

export const usersEffects = (dispatch: any) => {
  const { users } = dispatch as DispatchStore;
  return {
    async getUsers() {
      const data = (await FetchService.get('players')) as any;
      const usersList = data.data as UserModel[];
      users.SET_USERS(usersList);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    },
  };
};
