import { createModel } from '@rematch/core';
import type { RootModel } from '..';
import { authEffects } from './effects';
import authReducer from './reducer';
import { AuthState } from './types';

const INITIAL_STATE = {
  token: undefined,
  user: null,
} as AuthState;

export const auth = createModel<RootModel>()({
  state: INITIAL_STATE,
  reducers: authReducer,
  effects: authEffects,
});
