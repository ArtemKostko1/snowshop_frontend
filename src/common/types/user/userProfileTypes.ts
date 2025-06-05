import { IUser } from './userTypes';

export interface IProfileInfoForm {
  email?: string;
  name?: string;
  sexId?: number | null;
  age?: number | null;
  phoneNumber?: string | null;
}

export interface IPasswordChangeForm {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface IChangePasswordRequest {
  userId: number;
  currentPassword: string;
  newPassword: string;
}

export interface IUserProfileProps {
  user: IUser;
  isLoading: boolean;
  onUpdateProfile: (data: IProfileInfoForm) => void;
  onChangePassword: (data: IChangePasswordRequest) => void;
}
