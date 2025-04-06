export interface IPropsLogin {
  navigate: (to: string) => void;
  setUserName: (value: string) => void;
  setPassword: (value: string) => void;
}

export interface IPropsRegister {
  navigate: (to: string) => void;
  setName: (value: string) => void;
  setUserName: (value: string) => void;
  setPassword: (value: string) => void;
  setRepeatPassword: (value: string) => void;
}
