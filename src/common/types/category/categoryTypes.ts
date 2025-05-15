export interface ICategory {
  id: number;
  name: string;
  isNew?: boolean;
  [key: string]: unknown;
}