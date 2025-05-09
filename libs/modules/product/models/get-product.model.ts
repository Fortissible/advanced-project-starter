import { Product } from './product.model';

export type GetProductReq = {
  productId: string;
};
export type GetProductRes = Product;
