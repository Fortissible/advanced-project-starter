import 'package:dio/dio.dart';
import 'package:mobile_flutter/core/common_models/network.model.dart';
import 'package:mobile_flutter/data/remote_data_source/products/models/products_response.model.dart';

class ProductsRemoteDataSource {
  final Dio _dio;

  ProductsRemoteDataSource(this._dio);

  Future<NetworkResult<List<ProductsResponse>>> getProducts() async {
    try {
      final response = await _dio.get('products');

      final data = productsResponseFromJson(response.data);

      if (data.isEmpty) {
        return NetworkResult.empty();
      }

      return NetworkResult.success(data);
    } catch (e) {
      return NetworkResult.error(e.toString());
    }
  }
}