export interface IBrand {
  id: number;
  name: string;
  isNew?: boolean;
  [key: string]: unknown;
}

export interface IBrandTable {
  createBrand: (brand: Omit<IBrand, "id" | "isNew">) => Promise<IBrand>;
  updateBrand: (brand: IBrand) => Promise<IBrand>;
  deleteBrand: (id: number) => Promise<void>;
}
