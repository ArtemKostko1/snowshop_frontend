export interface IProductDetails {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  brandId: number;
  size: string[];
  article: string;
  inStock: boolean;
  internalCode: string;
  description: string;
  isNew?: boolean;
  images: string[];
  [key: string]: unknown;
}
