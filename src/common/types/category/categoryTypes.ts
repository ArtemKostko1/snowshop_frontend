export interface ICategory {
  id: number;
  name: string;
  isNew?: boolean;
  [key: string]: unknown;
}

export interface ICategoryTable {
  createCategory: (
    category: Omit<ICategory, "id" | "isNew">
  ) => Promise<ICategory>;
  updateCategory: (category: ICategory) => Promise<ICategory>;
  deleteCategory: (id: number) => Promise<void>;
}
