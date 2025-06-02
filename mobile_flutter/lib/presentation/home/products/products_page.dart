import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile_flutter/core/navigation/route_helper.dart';
import 'package:mobile_flutter/presentation/detail/detail_page_route_arg.dart';
import 'package:mobile_flutter/presentation/home/products/products_provider.dart';
import 'package:provider/provider.dart';

import '../../../core/navigation/navigation_helper.dart';

class ProductsPage extends StatefulWidget {
  const ProductsPage({super.key});

  @override
  State<ProductsPage> createState() => _ProductsPageState();
}

class _ProductsPageState extends State<ProductsPage> {
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.read<ProductsProvider>().getProducts();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start, // Align header left
      children: [
        const Padding(
          padding: EdgeInsets.all(16.0),
          child: Text(
            'Product List',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
        ),
        Consumer<ProductsProvider>(
          builder: (ctx, provider, child) {
            switch (provider.state) {
              case GetProductsState.init:
                return Center(child: Text("Processing..."));
              case GetProductsState.loading:
                return Center(child:CircularProgressIndicator());
              case GetProductsState.done:
                return Expanded(
                  child: ListView.builder(
                    itemCount: provider.products.length, // Replace with your data length
                    itemBuilder: (context, index) {
                      return ListTile(
                        leading: CircleAvatar(child: Image.network(provider.products[index].image)),
                        title: Text(provider.products[index].title),
                        subtitle: Text(provider.products[index].description),
                        onTap: () {
                          NavigationHelper.navigateTo(
                            RouteNames.detail,
                            arguments: DetailPageRouteArg(
                              id: provider.products[index].id,
                              title: provider.products[index].title,
                              desc:
                                  "Detail: ${provider.products[index].description}",
                              type: DetailType.products,
                            ),
                          );
                        },
                      );
                    },
                  ),
                );
              case GetProductsState.error:
                return Center(child: Text("Error Happened..."));
            }
          },
        ),
      ],
    );
  }
}
