import { Models } from '@rematch/core';
import { auth } from './auth';
import { users } from './users';

export interface RootModel extends Models<RootModel> {
  users: typeof users;
  auth: typeof auth;
}

const models: RootModel = { auth, users };

export default models;
