import type {
  GetProductReq,
  GetProductRes,
} from '@modules/product/models/get-product.model';
import type { GetProductsRes } from '@modules/product/models/get-products.model';

export default interface IProductRepository {
  getAllProduct: () => Promise<GetProductsRes>;
  getProductDetail: (req: GetProductReq) => Promise<GetProductRes>;
}
