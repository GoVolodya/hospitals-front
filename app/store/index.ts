import { init, RematchRootState } from '@rematch/core';
import { models, RootModel } from '@/app/store/models';

export const store = init({
  models,
});

export type RootState = RematchRootState<RootModel>;
