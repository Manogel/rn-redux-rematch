import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import models, { RootModel } from './models';

const Reactotron = console?.tron;

const enhancers =
  typeof Reactotron !== 'undefined' ? [Reactotron.createEnhancer!()] : [];

export const store = init({
  models,
  redux: {
    enhancers,
    devtoolOptions: {
      disabled: !__DEV__,
    },
  },
});

export type StoreState = typeof store;
export type DispatchStore = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
