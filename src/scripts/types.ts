
export type EventType = string;
export type ListenerType = (...args: ArgsType) => void;
export type ArgsType = unknown[];

export type UserGender = string;
export type UserName = {
  title: string;
  first: string;
  last: string;
}
export type UserLocation = {
  city: string; 
}
export type UserDob = {
  date: string; 
  age: string; 
}
export type User = {
  gender: UserGender;
  name: UserName;
  location: UserLocation;
  dob: UserDob;
};
export type UserResults = {
  results: User[]
};


// export type EventType = string;
// export type ArgsType = UserResultType[];
// export type ListenerType = (...args: ArgsType) => void;
// export type userNameType = {
//   'title': string;
//   'first': string;
//   'last': string;
// };
// export type UserResultType = {
//   gender: string;
//   name: userNameType;
// };
// export type ApiInfoType = {
//   seed: string;
//   results: number;
//   page: number;
//   version: string;
// };
// export type ApiResponseType = {
//   results: UserResultType[];
//   info: ApiInfoType;
// };