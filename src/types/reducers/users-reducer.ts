import { TUser } from "../../types/data";

type TFilterPayload = {
  age: {
    from: string,
    to: string,
  },
  name: string,
  value: string,
  isChecked: boolean,
  hairColors: string[],
  heights: string[],
};

type TCreateProfilePayload = {
  gender: string,
  age: string, 
  hairColor: string, 
  height: string,
  name: string,
  photo: string
};

type TPayload = TFilterPayload & TCreateProfilePayload & {
  userGenderInterest: string; 
};

export type TAction = {
  type: string;
  payload: TPayload; 
};

export type TUsersReducerInitialState = {
  users: TUser[];
  age: {
    from: string,
    to: string,
  };
  hairColors: string[];
  heights: string[];
  userGenderInterest: string;
};