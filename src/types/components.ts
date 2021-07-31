import { TUser } from '../types/data';

export type TUserInfo = {
  user: {
    age: number;
    gender: string;
    hairColor: string;
    height: number;
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