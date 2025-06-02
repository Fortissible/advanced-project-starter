import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:mobile_flutter/core/common_models/failure.model.dart';
import 'package:mobile_flutter/data/remote_data_source/products/products.remote_date_source.dart';
import 'package:mobile_flutter/data/repository/products/products_repository.dart';
import 'package:mobile_flutter/domain/entity/products.entity.dart';

class ProductsRepository extends IProductsRepository {
  final ProductsRemoteDataSource remoteDataSource;

  ProductsRepository({required this.remoteDataSource});

  @override
  Future<Either<Failure, List<ProductEntity>>> getProducts() async {
    try {
      final productsRes = await remoteDataSource.getProducts();

      final productsData = productsRes.data;
      if (productsData == null) {
        return Right([]);
      }

      final listUserEntity =
          productsData
              .map(
                (postData) => ProductEntity(
                  id: postData.id,
                  title: postData.title,
                  price: postData.price,
                  description: postData.description,
                  category: postData.category,
                  image: postData.image,
                  rating: RatingEntity(
                      rate: postData.rating.rate,
                      count: postData.rating.count
                  ),
                ),
              )
              .toList();
      return Right(listUserEntity);
    } on SocketException catch (e) {
      return Left(ConnectionFailure(e.message));
    }
  }
}
