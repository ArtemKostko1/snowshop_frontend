export interface IProductDetails {
  id: number;
  name: string;
  categoryId: number;
  brandId: number;
  article: string;
  articleRoute: string;
  size: string[];
  price: number;
  inStock: boolean;
  images: string[];
  description: string;
  internalCode: string;
}
