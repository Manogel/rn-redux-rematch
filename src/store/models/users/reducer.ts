import { UserModel, UsersState } from './types';

const usersReducer = {
  SET_USERS: (state: UsersState, users: UserModel[]) => {
    return {
      ...state,
      users,
    };
  },
};

export default usersReducer;
