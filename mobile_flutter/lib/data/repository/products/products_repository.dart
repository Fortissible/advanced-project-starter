import 'package:dartz/dartz.dart';
import 'package:mobile_flutter/core/common_models/failure.model.dart';
import 'package:mobile_flutter/domain/entity/products.entity.dart';

abstract class IProductsRepository {
  Future<Either<Failure,List<ProductEntity>>> getProducts();
}