export interface IUser {
  id: number;
  email: string;
  password?: string;
  firstName?: string;
  name: string;
  roleId: number;
  sexId?: number | null;
  age?: number | null;
  phoneNumber?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
