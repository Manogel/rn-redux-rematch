import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import models, { RootModel } from './models';

export const store = init({
  models,
});

export type StoreState = typeof store;
export type DispatchStore = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
