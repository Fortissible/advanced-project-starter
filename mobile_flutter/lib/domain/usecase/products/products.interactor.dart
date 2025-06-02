import 'package:dartz/dartz.dart';
import 'package:mobile_flutter/core/common_models/failure.model.dart';
import 'package:mobile_flutter/data/repository/products/products_repository.dart';
import 'package:mobile_flutter/domain/entity/products.entity.dart';
import 'package:mobile_flutter/domain/usecase/products/products.usecase.dart';

class ProductsInteractor implements ProductsUseCase {

  final IProductsRepository productsRepository;

  ProductsInteractor({
    required this.productsRepository
  });

  @override
  Future<Either<Failure, List<ProductEntity>>> getProducts() => productsRepository.getProducts();
}