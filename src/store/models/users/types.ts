export interface UserModel {
  id: number;
  first_name: string;
}

export type UsersState = {
  users: UserModel[];
};
