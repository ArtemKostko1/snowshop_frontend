export interface IProduct {
  id: number;
  name: string;
  price: number | undefined;
  categoryId: number | undefined;
  brandId: number | undefined;
  size?: string;
  article: string;
  inStock: boolean;
  internalCode: string;
  description: string;
  isNew?: boolean;
  [key: string]: unknown;
}

export interface IProductTable {
  createProduct: (product: Omit<IProduct, "id" | "isNew">) => Promise<IProduct>;
  updateProduct: (product: IProduct) => Promise<IProduct>;
  deleteProduct: (id: number) => Promise<void>;
}