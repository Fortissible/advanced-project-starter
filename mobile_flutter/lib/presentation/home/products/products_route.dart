import 'package:flutter/material.dart';
import 'package:mobile_flutter/presentation/home/products/products_page.dart';

class ProductsRoute {
  static MaterialPageRoute route(RouteSettings? settings) {
    return MaterialPageRoute(
        builder: (context) => const ProductsPage(),
        settings: settings
    );
  }
}