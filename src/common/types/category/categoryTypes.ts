export interface ICategory {
  id: number;
  name: string;
  value: string;
  isNew?: boolean;
  [key: string]: unknown;
}
