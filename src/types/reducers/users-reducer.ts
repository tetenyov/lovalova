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

export type TAction = TFilterPayload & TCreateProfilePayload & {
  type: string;
  payload: TPayload; 
};