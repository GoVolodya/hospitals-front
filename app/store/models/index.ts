import { Models } from '@rematch/core';
import { hospitals } from './hospitals';

export interface RootModel extends Models<RootModel> {
  hospitals: typeof hospitals;
}

export const models: RootModel = {
  hospitals,
};
