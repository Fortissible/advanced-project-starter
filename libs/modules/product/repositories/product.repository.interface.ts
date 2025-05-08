import { GetProductReq, GetProductRes } from '../models/get-product.model';
import { GetProductsRes } from '../models/get-products.model';

export default interface IProductRepository {
  getAllProduct: () => Promise<GetProductsRes>;
  getProductDetail: (req: GetProductReq) => Promise<GetProductRes>;
}
