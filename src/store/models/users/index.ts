import { createModel } from '@rematch/core';
import type { RootModel } from '..';
import { usersEffects } from './effects';
import usersReducer from './reducer';
import { UserModel, UsersState } from './types';

const INITIAL_STATE = {
  users: [],
} as UsersState;

export const users = createModel<RootModel>()({
  state: INITIAL_STATE,
  reducers: usersReducer,
  effects: usersEffects,
});
