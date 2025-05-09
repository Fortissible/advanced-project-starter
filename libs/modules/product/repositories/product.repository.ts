import { IHttpClient } from '@common/http-client/http-client.interface';
import {
  GetProductReq,
  GetProductRes,
} from '@modules/product/models/get-product.model';
import { GetProductsRes } from '@modules/product/models/get-products.model';
import IProductRepository from './product.repository.interface';

export default function productRepositoryImpl(
  httpClient: IHttpClient,
): IProductRepository {
  const getAllProduct = async () => {
    const res = await httpClient.get<GetProductsRes>('/products');

    return res;
  };

  const getProductDetail = async (req: GetProductReq) => {
    const res = await httpClient.get<GetProductRes>(
      `/products/${req.productId}`,
    );

    return res;
  };

  return {
    getProductDetail,
    getAllProduct,
  };
}
