import { TUser } from '../types/data';

export type TUserInfo = {
  user: {
    age: number;
    gender: string;
    hairColor: string;
    height: string;
  }
};

export type TNavEnterPage = {
  pathname: string;
};

export type TPageHeading = {
  children: React.ReactNode;
};

export type TUserList = {
  filteredUsers: TUser[];
};

export type TUserPageId = {
  id: string;
};

export type TUserPageUsers = {
  users: TUser[];
};