import { TUser } from '../types/data';
import { TProfileData } from './action-creators';

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

export type TFiltersForm = {
  from: string;
  to: string;
  hairColors: string[];
  heights: string[];
  sendData(evt: React.FormEvent<HTMLFormElement>): void;
};

export type TFilters = {
  age: {
    from: string,
    to: string,
  };
  hairColors: string[];
  heights: string[];
};

export type TUploadAvatar = {
  getImageSrc(src: string | ArrayBuffer | null): void;
};

export type TEditProfile = {
  profileData: TProfileData;
  getProfileData(evt: React.ChangeEvent<HTMLFormElement>): void;
  getImageSrc(imageSrc: string): void;
};