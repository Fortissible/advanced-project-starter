import 'package:flutter/material.dart';
import 'package:mobile_flutter/domain/entity/products.entity.dart';
import 'package:mobile_flutter/domain/usecase/products/products.usecase.dart';

enum GetProductsState { init, loading, done, error }

class ProductsProvider extends ChangeNotifier {
  final ProductsUseCase useCase;

  GetProductsState _state = GetProductsState.init;
  List<ProductEntity> _products = [];
  String? _errorMessage;

  // Getters
  GetProductsState get state => _state;
  List<ProductEntity> get products => _products;
  String? get errorMessage => _errorMessage;

  ProductsProvider({required this.useCase});

  Future<void> getProducts() async {
    _state = GetProductsState.loading;
    notifyListeners();

    final result = await useCase.getProducts();

    result.fold(
          (failure) {
        _errorMessage = failure.message;
        _state = GetProductsState.error;
      },
          (data) {
        _products = data;
        _state = GetProductsState.done;
      },
    );

    notifyListeners();
  }
}